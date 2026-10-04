(function () {
  "use strict";

  var CFG = window.WL_CONFIG || {};

  var CHECKS = [
    {
      id: "form-submits",
      title: "Form submits successfully",
      hint: "Fill required fields and submit. Confirm the request completes without a blank page, hang, or silent failure.",
      category: "enquiry"
    },
    {
      id: "success-error",
      title: "Success or error response appears",
      hint: "After submit, a clear success message, thank-you state, or understandable error is shown on screen.",
      category: "enquiry"
    },
    {
      id: "notification-email",
      title: "Notification email arrives",
      hint: "Check the address that should receive new enquiries. Allow a few minutes; try a second test if needed.",
      category: "enquiry"
    },
    {
      id: "spam-junk",
      title: "Spam / junk folder checked",
      hint: "Look in spam, junk, promotions, and any filtered folders for the notification or autoresponder.",
      category: "enquiry"
    },
    {
      id: "admin-recipient",
      title: "Admin recipient address is correct",
      hint: "Confirm the form notification goes to the right mailbox (not an old staff address or typo).",
      category: "enquiry"
    },
    {
      id: "smtp-configured",
      title: "SMTP / mail delivery configured",
      hint: "WordPress mail often needs an SMTP plugin or host relay. Check whether transactional mail is set up at all.",
      category: "enquiry"
    },
    {
      id: "mobile-form",
      title: "Mobile form works",
      hint: "On a phone or narrow viewport: fields usable, submit reachable, keyboard does not hide the button.",
      category: "enquiry"
    },
    {
      id: "required-validation",
      title: "Required-field validation works",
      hint: "Submit empty/invalid fields. Required rules should block send and explain what is missing.",
      category: "enquiry"
    },
    {
      id: "thankyou-path",
      title: "Confirmation / thank-you path works",
      hint: "After a valid submit, redirect or on-page thank-you appears and is not a 404 or wrong page.",
      category: "enquiry"
    },
    {
      id: "crm-inbox",
      title: "Enquiry reaches CRM / inbox where applicable",
      hint: "If you use CRM, Slack, or a shared inbox integration, confirm the lead lands there — not only in email.",
      category: "enquiry"
    },
    {
      id: "recent-changes",
      title: "Recent plugin / theme / update changes considered",
      hint: "Note anything updated or changed recently (form plugin, theme, security, caching, CDN). Correlate with when breakage started.",
      category: "maintenance"
    },
    {
      id: "backup-exists",
      title: "Backup exists before modifications",
      hint: "Before changing plugins, theme, or mail settings, confirm a recent backup (files + database) is available.",
      category: "maintenance"
    }
  ];

  var STATES = [
    { value: "pass", label: "Pass" },
    { value: "fail", label: "Fail" },
    { value: "unsure", label: "Not sure" },
    { value: "na", label: "N/A" }
  ];

  var answers = {};
  var lastReport = "";

  var listEl = document.getElementById("checks-list");
  var resultsEl = document.getElementById("results");
  var failedList = document.getElementById("failed-list");
  var unsureList = document.getElementById("unsure-list");
  var failedEmpty = document.getElementById("failed-empty");
  var unsureEmpty = document.getElementById("unsure-empty");
  var recommendationEl = document.getElementById("recommendation");
  var reportText = document.getElementById("report-text");
  var copyStatus = document.getElementById("copy-status");
  var btnGenerate = document.getElementById("btn-generate");
  var btnCopy = document.getElementById("btn-copy");
  var btnReset = document.getElementById("btn-reset");

  function applyBrandConfig() {
    var name = CFG.businessName || "Your Business";
    var identity = CFG.reportIdentity || name;
    var heading = CFG.heading || "WordPress Enquiry Path Checklist";
    var intro = CFG.intro || "";
    var chip = CFG.chipText || "Manual checklist · runs in your browser · nothing uploaded";
    var ctaLabel = CFG.ctaLabel || ("Contact " + name);
    var ctaUrl = CFG.ctaUrl || "#";
    var ctaHeading = CFG.ctaHeading || "Need help fixing it?";
    var ctaLead = CFG.ctaLead || "";
    var supportEmail = CFG.supportEmail || "";

    document.title = heading + " — " + name;

    var brandName = document.getElementById("brand-name");
    if (brandName) brandName.textContent = name;

    var brandLink = document.getElementById("brand-link");
    if (brandLink) brandLink.href = ctaUrl;

    var logo = document.getElementById("brand-logo");
    if (logo) {
      if (CFG.logoPath) {
        logo.src = CFG.logoPath;
        logo.alt = name + " logo";
        logo.hidden = false;
      } else {
        logo.hidden = true;
        logo.removeAttribute("src");
      }
    }

    var chipEl = document.getElementById("chip-text");
    if (chipEl) chipEl.textContent = chip;

    var headingEl = document.getElementById("page-heading");
    if (headingEl) headingEl.textContent = heading;

    var introEl = document.getElementById("page-intro");
    if (introEl && intro) {
      introEl.innerHTML = "";
      // Preserve strong emphasis on “not” if phrase present; otherwise plain text.
      var notMarker = " does not ";
      var idx = intro.indexOf(notMarker);
      if (idx === -1) {
        introEl.textContent = intro;
      } else {
        introEl.appendChild(document.createTextNode(intro.slice(0, idx + 1)));
        var strong = document.createElement("strong");
        strong.textContent = "not";
        introEl.appendChild(strong);
        introEl.appendChild(document.createTextNode(intro.slice(idx + notMarker.length - 1)));
      }
    }

    var ctaH = document.getElementById("cta-heading");
    if (ctaH) ctaH.textContent = ctaHeading;

    var ctaLeadEl = document.getElementById("cta-lead");
    if (ctaLeadEl && ctaLead) ctaLeadEl.textContent = ctaLead;

    var ctaBtn = document.getElementById("cta-button");
    if (ctaBtn) {
      ctaBtn.textContent = ctaLabel;
      ctaBtn.href = ctaUrl;
    }

    var footerName = document.getElementById("footer-name");
    if (footerName) footerName.textContent = name;

    var footerNote = document.getElementById("footer-note");
    if (footerNote) {
      var note =
        "This page never claims automatic website inspection. You mark each check yourself.";
      if (supportEmail) {
        note += " Support: " + supportEmail + ".";
      }
      footerNote.textContent = note;
    }

    if (CFG.accent) {
      document.documentElement.style.setProperty("--accent", CFG.accent);
    }
    if (CFG.accentSoft) {
      document.documentElement.style.setProperty("--accent-soft", CFG.accentSoft);
    }

    var banner = document.getElementById("demo-banner");
    if (banner) {
      if (CFG.isDemo) {
        banner.hidden = false;
        banner.textContent =
          CFG.demoBannerText ||
          "DEMONSTRATION ONLY — fictional branding. Not a live customer site.";
      } else {
        banner.hidden = true;
        banner.textContent = "";
      }
    }

    // Stash for report builder
    CFG._resolvedIdentity = identity;
    CFG._resolvedName = name;
  }

  function buildChecklist() {
    var html = "";
    for (var i = 0; i < CHECKS.length; i++) {
      var c = CHECKS[i];
      var groupName = "check-" + c.id;
      html += '<li class="check-item" data-id="' + c.id + '">';
      html += '<div class="check-title" id="label-' + c.id + '">' + escapeHtml(c.title) + "</div>";
      html += '<p class="check-hint">' + escapeHtml(c.hint) + "</p>";
      html += '<div class="states" role="radiogroup" aria-labelledby="label-' + c.id + '">';
      for (var s = 0; s < STATES.length; s++) {
        var st = STATES[s];
        var inputId = groupName + "-" + st.value;
        html +=
          '<label class="state-opt" data-state="' +
          st.value +
          '" for="' +
          inputId +
          '">' +
          '<input type="radio" name="' +
          groupName +
          '" id="' +
          inputId +
          '" value="' +
          st.value +
          '" />' +
          "<span>" +
          escapeHtml(st.label) +
          "</span></label>";
      }
      html += "</div></li>";
    }
    listEl.innerHTML = html;

    listEl.addEventListener("change", function (e) {
      var t = e.target;
      if (!t || t.type !== "radio") return;
      var id = t.name.replace(/^check-/, "");
      answers[id] = t.value;
      updateSelectedStyles(t.closest(".check-item"));
      copyStatus.textContent = "";
    });
  }

  function updateSelectedStyles(item) {
    if (!item) return;
    var opts = item.querySelectorAll(".state-opt");
    for (var i = 0; i < opts.length; i++) {
      var inp = opts[i].querySelector("input");
      if (inp && inp.checked) opts[i].classList.add("selected");
      else opts[i].classList.remove("selected");
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getAnswer(id) {
    return answers[id] || "";
  }

  function collectByState(state) {
    var out = [];
    for (var i = 0; i < CHECKS.length; i++) {
      if (getAnswer(CHECKS[i].id) === state) out.push(CHECKS[i]);
    }
    return out;
  }

  function unansweredCount() {
    var n = 0;
    for (var i = 0; i < CHECKS.length; i++) {
      if (!getAnswer(CHECKS[i].id)) n++;
    }
    return n;
  }

  /** Neutral diagnostic advice only — no product/price upsell. */
  function recommendCategory(failed, unsure) {
    var enquiryFail = 0;
    var maintFail = 0;
    var enquiryUnsure = 0;
    var maintUnsure = 0;
    for (var i = 0; i < failed.length; i++) {
      if (failed[i].category === "maintenance") maintFail++;
      else enquiryFail++;
    }
    for (var j = 0; j < unsure.length; j++) {
      if (unsure[j].category === "maintenance") maintUnsure++;
      else enquiryUnsure++;
    }

    if (failed.length === 0 && unsure.length === 0) {
      return {
        text:
          "No Fail or Not-sure items. If the form still misbehaves in production, re-test from another device/network and note exact steps — the checklist alone cannot prove server-side delivery."
      };
    }

    if (enquiryFail >= 2 || (enquiryFail >= 1 && enquiryUnsure >= 1)) {
      return {
        text:
          "Several enquiry-path items failed or are uncertain (submit, response, email, SMTP, validation, thank-you, or CRM). Investigate the form → mail → inbox chain before changing live settings."
      };
    }

    if (enquiryFail === 1) {
      return {
        text:
          "One clear Fail on the enquiry path. Narrow that single issue (reproduce, note plugin/theme, capture any error), then decide whether it is a small isolated fix or part of a wider form→mail path problem."
      };
    }

    if (maintFail >= 1 && enquiryFail === 0) {
      return {
        text:
          "Issues centre on recent changes and/or backup readiness rather than a confirmed form defect. Prefer a careful update/safety review (or restore from backup) before changing live mail/form settings."
      };
    }

    if (unsure.length > 0 && failed.length === 0) {
      return {
        text:
          "Nothing marked Fail yet — several items are Not sure. Re-test those steps (especially email, spam, SMTP, and mobile) before changing production settings."
      };
    }

    return {
      text:
        "Mixed signals across the enquiry path. Reproduce the failure once more, list Fail items in priority order, then decide whether the defect is a single small fix or a full form→mail path repair."
    };
  }

  function stateLabel(v) {
    if (v === "pass") return "PASS";
    if (v === "fail") return "FAIL";
    if (v === "unsure") return "NOT SURE";
    if (v === "na") return "NOT APPLICABLE";
    return "UNANSWERED";
  }

  function buildReport(failed, unsure, rec) {
    var identity = CFG._resolvedIdentity || CFG.reportIdentity || CFG.businessName || "Checklist";
    var lines = [];
    lines.push(identity + " — WordPress Enquiry Path Checklist");
    lines.push("Diagnostic report (manual checklist — not an automatic scan)");
    lines.push("Generated: " + new Date().toISOString());
    lines.push("");
    lines.push("=== CHECK RESULT ===");
    for (var i = 0; i < CHECKS.length; i++) {
      var c = CHECKS[i];
      lines.push((i + 1) + ". [" + stateLabel(getAnswer(c.id)) + "] " + c.title);
    }
    lines.push("");
    lines.push("=== FAILED STAGE(S) ===");
    if (failed.length === 0) lines.push("(none)");
    else {
      for (var f = 0; f < failed.length; f++) lines.push("- " + failed[f].title);
    }
    lines.push("");
    lines.push("=== NOT-SURE STAGE(S) ===");
    if (unsure.length === 0) lines.push("(none)");
    else {
      for (var u = 0; u < unsure.length; u++) lines.push("- " + unsure[u].title);
    }
    lines.push("");
    lines.push("=== TEST CONTEXT ===");
    lines.push("(Fill before pasting into email — no passwords, API keys, or payment data)");
    lines.push("Site URL: ");
    lines.push("Form page / name: ");
    lines.push("When issue noticed: ");
    lines.push("Form plugin (if known): ");
    lines.push("Browser / device used for this test: ");
    lines.push("");
    lines.push("=== NEXT SAFE STEP ===");
    lines.push(rec.text);
    lines.push("");
    lines.push("Privacy note: this report was generated locally in the browser.");
    lines.push(identity + " does not receive your answers via this page.");
    return lines.join("\n");
  }

  function fillList(ul, emptyEl, items) {
    ul.innerHTML = "";
    if (items.length === 0) {
      emptyEl.hidden = false;
      return;
    }
    emptyEl.hidden = true;
    for (var i = 0; i < items.length; i++) {
      var li = document.createElement("li");
      li.textContent = items[i].title;
      ul.appendChild(li);
    }
  }

  function generate() {
    var open = unansweredCount();
    if (open > 0) {
      copyStatus.textContent =
        open +
        " item" +
        (open === 1 ? "" : "s") +
        " still unmarked. Mark every item (use N/A if it does not apply), then generate again.";
      copyStatus.style.color = "var(--warn)";
      resultsEl.hidden = true;
      btnCopy.disabled = true;
      lastReport = "";
      return;
    }
    copyStatus.style.color = "var(--ok)";
    copyStatus.textContent = "";

    var failed = collectByState("fail");
    var unsure = collectByState("unsure");
    var rec = recommendCategory(failed, unsure);

    fillList(failedList, failedEmpty, failed);
    fillList(unsureList, unsureEmpty, unsure);
    recommendationEl.textContent = rec.text;
    lastReport = buildReport(failed, unsure, rec);
    reportText.textContent = lastReport;
    resultsEl.hidden = false;
    btnCopy.disabled = false;

    resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function copyReport() {
    if (!lastReport) return;
    function ok() {
      copyStatus.style.color = "var(--ok)";
      copyStatus.textContent = "Report copied to clipboard.";
    }
    function failFallback() {
      try {
        var range = document.createRange();
        range.selectNodeContents(reportText);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        copyStatus.style.color = "var(--warn)";
        copyStatus.textContent = "Clipboard blocked — report text selected; press Ctrl/Cmd+C.";
      } catch (e) {
        copyStatus.style.color = "var(--bad)";
        copyStatus.textContent = "Could not copy. Select the report text manually.";
      }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(lastReport).then(ok).catch(failFallback);
    } else {
      failFallback();
    }
  }

  function resetAll() {
    answers = {};
    lastReport = "";
    var radios = listEl.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < radios.length; i++) radios[i].checked = false;
    var opts = listEl.querySelectorAll(".state-opt");
    for (var j = 0; j < opts.length; j++) opts[j].classList.remove("selected");
    resultsEl.hidden = true;
    btnCopy.disabled = true;
    reportText.textContent = "";
    failedList.innerHTML = "";
    unsureList.innerHTML = "";
    recommendationEl.textContent = "";
    copyStatus.textContent = "";
  }

  window.WPEnquiryChecklist = {
    CHECKS: CHECKS,
    CFG: CFG,
    getAnswers: function () {
      return Object.assign({}, answers);
    },
    setAnswer: function (id, value) {
      answers[id] = value;
    },
    collectByState: collectByState,
    recommendCategory: recommendCategory,
    buildReport: buildReport,
    generate: generate,
    resetAll: resetAll,
    unansweredCount: unansweredCount,
    getLastReport: function () {
      return lastReport;
    },
    applyBrandConfig: applyBrandConfig
  };

  btnGenerate.addEventListener("click", generate);
  btnCopy.addEventListener("click", copyReport);
  btnReset.addEventListener("click", resetAll);

  applyBrandConfig();
  buildChecklist();
})();
