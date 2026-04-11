import Script from "next/script";

import { contactFormWidget } from "@/lib/site";

export function LeadConnectorForm({ compact = false, instance = "default" }) {
  const iframeId = `inline-${contactFormWidget.formId}-${instance}`;

  return (
    <>
      <Script
        id="empire-leadconnector-form-embed"
        src={contactFormWidget.scriptSrc}
        strategy="lazyOnload"
      />

      <div className={`leadConnectorForm${compact ? " leadConnectorForm--compact" : ""}`}>
        <div className="leadConnectorForm__frame">
          <iframe
            src={contactFormWidget.iframeSrc}
            style={{ width: "100%", height: "100%", border: "none", borderRadius: "inherit" }}
            id={iframeId}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name={contactFormWidget.formName}
            data-height={String(contactFormWidget.defaultHeight)}
            data-layout-iframe-id={iframeId}
            data-form-id={contactFormWidget.formId}
            title={contactFormWidget.formName}
          />
        </div>
      </div>
    </>
  );
}
