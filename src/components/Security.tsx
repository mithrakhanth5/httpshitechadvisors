import React, { useRef, useEffect } from 'react';
import { gsap, SYMMETRY_EASE } from '../lib/gsap';

export const Security: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Dark panel entrance
      gsap.fromTo(
        root.querySelector('.Security_frame___2TmD'),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.9,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        root.querySelector('.Security_panel__mGp5Z'),
        { y: 48 },
        {
          y: 0,
          duration: 0.9,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Headline
      gsap.fromTo(
        root.querySelectorAll('.Security_h2__I_4Bs span span'),
        { yPercent: 108 },
        {
          yPercent: 0,
          duration: 0.85,
          delay: 0.2,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Subtitle
      gsap.fromTo(
        root.querySelector('.Security_sub___4UtB'),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Floating Shield layers
      gsap.fromTo(
        root.querySelectorAll('.Security_fill__sMCAc'),
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.9,
          delay: 0.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Columns below
      gsap.fromTo(
        root.querySelectorAll('.Security_columnBody__l__x_'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          delay: 0.35,
          ease: SYMMETRY_EASE,
          scrollTrigger: {
            trigger: root.querySelector('.Security_columns__awF9B'),
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef as any}>
      <section className="Security_root__pgXLp" aria-labelledby="security-title"><div className="Security_frame___2TmD" style={({"opacity":"0"} as React.CSSProperties)}><div className="Security_panel__mGp5Z" style={({"transform":"translateY(48px)"} as React.CSSProperties)}><div className="Security_art__gMlSM"><div className="Security_lines__gugo_" aria-hidden="true" style={({"transform":"translateY(6px)"} as React.CSSProperties)}><div aria-hidden="true" className="Draw_draw__USCft" style={({"position":"absolute","left":"639.95px","top":"329.3px","width":"24px","height":"168.53px","--delay":"0.1s","--step":"0.08s","--dur":"1.1s"} as React.CSSProperties)}><svg xmlns="http://www.w3.org/2000/svg" width="24.00" height="168.53" viewBox="0 0 24.000 168.529" fill="none"><defs><linearGradient id="security-spine" x1="651.945" y1="434" x2="651.945" y2="446" gradientUnits="userSpaceOnUse"><stop stopColor="#F5F3F2" stopOpacity="0"/><stop offset="1" stopColor="#F5F3F2" stopOpacity="0.04"/></linearGradient>
</defs><g transform="translate(-639.945 -329.303)"><g><path id="Vector 3329" d="M651.945 485.832V341.303" stroke="url(#security-spine)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"0"} as React.CSSProperties)} />
</g></g></svg></div><div aria-hidden="true" className="Draw_draw__USCft Security_linesMask__SnsV1" style={({"position":"absolute","left":"100px","top":"20px","width":"1100px","height":"480px","--delay":"0.14s","--step":"0.08s","--dur":"1.5s"} as React.CSSProperties)}><svg xmlns="http://www.w3.org/2000/svg" width="1100.00" height="480.00" viewBox="0 0 1100.000 480.000" fill="none"><defs>
<linearGradient id="paint0_linear_security" x1="1279.31" y1="416.071" x2="1004.62" y2="109.141" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.19" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.2" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint10_linear_security" x1="901.485" y1="518.584" x2="736.505" y2="344.384" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.247059" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint11_linear_security" x1="402.405" y1="518.522" x2="567.386" y2="344.322" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.247059" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint12_linear_security" x1="778.752" y1="520.748" x2="681.049" y2="481.082" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint13_linear_security" x1="525.138" y1="520.687" x2="622.842" y2="481.021" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint1_linear_security" x1="24.5796" y1="416.01" x2="299.262" y2="109.081" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.19" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.2" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint2_linear_security" x1="1274.38" y1="457.642" x2="992.056" y2="90.1877" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.2" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint3_linear_security" x1="29.5004" y1="457.582" x2="311.827" y2="90.1272" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.2" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint4_linear_security" x1="1263.06" y1="510.136" x2="946.29" y2="99.0694" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.2" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint5_linear_security" x1="40.8233" y1="510.074" x2="357.593" y2="99.0079" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.2" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint6_linear_security" x1="1162.15" y1="519.552" x2="857.63" y2="188.861" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.2" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint7_linear_security" x1="141.745" y1="519.492" x2="446.261" y2="188.801" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.2" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint8_linear_security" x1="1030.46" y1="518.69" x2="763.701" y2="275.83" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.2" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
<linearGradient id="paint9_linear_security" x1="273.438" y1="518.629" x2="540.198" y2="275.769" gradientUnits="userSpaceOnUse">
<stop stopColor="#F5F3F2" stopOpacity="0.18" />
<stop offset="0.301168" stopColor="#F5F3F2" stopOpacity="0.2" />
<stop offset="1" stopColor="#F5F3F2" stopOpacity="0" />
</linearGradient>
</defs><g transform="translate(-100.000 -20.000)"><g><g id="visual">

<g>
<g id="Group 1410122332">
<path id="Vector 3322" d="M1240.77 384.794L1003.73 298.096C996.306 295.38 991.367 288.315 991.367 280.408V119" stroke="url(#paint0_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"6"} as React.CSSProperties)} />
<path id="Vector 3438" d="M63.1191 384.733L300.155 298.035C307.581 295.319 312.52 288.254 312.52 280.347V119" stroke="url(#paint1_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"6"} as React.CSSProperties)} />
<path id="Vector 3323" d="M1231.89 424.95L968.52 315.214C961.501 312.29 956.93 305.432 956.93 297.829V115" stroke="url(#paint2_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"5"} as React.CSSProperties)} />
<path id="Vector 3439" d="M71.9904 424.89L335.363 315.153C342.381 312.229 346.953 305.371 346.953 297.768V115" stroke="url(#paint3_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"5"} as React.CSSProperties)} />
<path id="Vector 3324" d="M1216.89 475.255L928.243 325.423C922.002 322.183 918.086 315.738 918.086 308.707L918.086 119" stroke="url(#paint4_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"4"} as React.CSSProperties)} />
<path id="Vector 3440" d="M86.9969 475.193L375.64 325.361C381.88 322.122 385.797 315.676 385.797 308.645L385.797 119" stroke="url(#paint5_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"4"} as React.CSSProperties)} />
<path id="Vector 3325" d="M1125 484.646L893.489 340.656C887.962 337.219 884.602 331.172 884.602 324.663L884.602 162" stroke="url(#paint6_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"3"} as React.CSSProperties)} />
<path id="Vector 3441" d="M178.893 484.585L410.402 340.596C415.929 337.158 419.289 331.111 419.289 324.603L419.289 162" stroke="url(#paint7_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"3"} as React.CSSProperties)} />
<path id="Vector 3326" d="M1004.1 484.652L840.524 353.127C836.078 349.552 833.492 344.155 833.492 338.449L833.492 197" stroke="url(#paint8_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"2"} as React.CSSProperties)} />
<path id="Vector 3442" d="M299.801 484.591L463.374 353.067C467.82 349.492 470.406 344.094 470.406 338.389L470.406 197" stroke="url(#paint9_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"2"} as React.CSSProperties)} />
<path id="Vector 3327" d="M884.363 484.651L778.442 367.79C775.302 364.326 773.562 359.817 773.562 355.142V307" stroke="url(#paint10_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"1"} as React.CSSProperties)} />
<path id="Vector 3443" d="M419.527 484.588L525.449 367.728C528.589 364.263 530.328 359.755 530.328 355.079V307" stroke="url(#paint11_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"1"} as React.CSSProperties)} />
<path id="Vector 3328" d="M771.678 485.828L727.448 383.656C726.426 381.294 725.898 378.748 725.898 376.174V368" stroke="url(#paint12_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"0"} as React.CSSProperties)} />
<path id="Vector 3444" d="M532.213 485.768L576.442 383.595C577.465 381.233 577.992 378.687 577.992 376.113V368" stroke="url(#paint13_linear_security)" strokeWidth="1.56951" pathLength="1" className="draw-path" style={({"--i":"0"} as React.CSSProperties)} />
</g>
</g>
</g>
</g></g></svg></div></div><div className="Security_stage___Mfnm" aria-hidden="true" style={({"left":"452px","top":"24px","width":"396px","height":"444px","transform":"translateY(16px)"} as React.CSSProperties)}><div className="Security_float__8Pohl" style={({"--amp":"3px"} as React.CSSProperties)}><div className="Security_fill__sMCAc" style={({"transformOrigin":"198.20000000000005px 226.5px","opacity":"0","transform":"translateY(32px) scale(0.94)"} as React.CSSProperties)}><div className="Security_fill__sMCAc" style={({"transform":"none"} as React.CSSProperties)}><svg className="Security_backdrop__zM2QS" viewBox="525.047 95.44 250.282 310.094" style={({"left":"73.04700000000003px","top":"71.44px","width":"250.282px","height":"310.094px"} as React.CSSProperties)}><path d="M636.218 98.8912L537.601 136.7C530.042 139.604 525.047 146.874 525.047 154.992V247.773C525.047 273.743 535.331 298.644 553.645 317.001L631.76 395.335C641.93 405.534 658.405 405.534 668.575 395.335L746.722 317.001C765.036 298.636 775.329 273.727 775.329 247.757V154.992C775.329 146.874 770.333 139.596 762.775 136.7L664.108 98.8831C655.126 95.44 645.2 95.44 636.218 98.8831V98.8912Z" /></svg><img src="/art/security/shield-outer.svg" alt="" aria-hidden="true" draggable="false" decoding="async" style={({"position":"absolute","maxWidth":"none","left":"61.049999999999955px","top":"59.44px","width":"274.28px","height":"334.09px"} as React.CSSProperties)}/></div></div></div><div className="Security_float__8Pohl" style={({"--amp":"4px"} as React.CSSProperties)}><div className="Security_fill__sMCAc" style={({"transformOrigin":"198.20000000000005px 226.5px","opacity":"0","transform":"translateY(24px) scale(0.94)"} as React.CSSProperties)}><div className="Security_fill__sMCAc" style={({"transform":"none"} as React.CSSProperties)}><img src="/art/security/shield-inner.svg" alt="" aria-hidden="true" draggable="false" decoding="async" style={({"position":"absolute","maxWidth":"none","left":"92.76999999999998px","top":"91.39px","width":"210.83px","height":"260.97px"} as React.CSSProperties)}/></div></div></div><div className="Security_float__8Pohl Security_glow__bt9RI" style={({"--amp":"4px"} as React.CSSProperties)}><div className="Security_fill__sMCAc" style={({"transformOrigin":"198.20000000000005px 226.5px","opacity":"0","transform":"translateY(12px) scale(0.98)"} as React.CSSProperties)}><div className="Security_fill__sMCAc" style={({"transform":"none"} as React.CSSProperties)}><img src="/art/security/glow-left.svg" alt="" aria-hidden="true" draggable="false" decoding="async" style={({"position":"absolute","maxWidth":"none","left":"7.649999999999977px","top":"6.920000000000002px","width":"302.44px","height":"354.21px"} as React.CSSProperties)}/><img src="/art/security/glow-right.svg" alt="" aria-hidden="true" draggable="false" decoding="async" style={({"position":"absolute","maxWidth":"none","left":"85.70000000000005px","top":"133.63px","width":"303px","height":"301.93px"} as React.CSSProperties)}/></div></div></div><div className="Security_float__8Pohl" style={({"--amp":"5px"} as React.CSSProperties)}><div className="Security_fill__sMCAc" style={({"transformOrigin":"198.20000000000005px 226.5px","opacity":"0","transform":"translateY(18px) scale(0.86)"} as React.CSSProperties)}><div className="Security_fill__sMCAc" style={({"transform":"none"} as React.CSSProperties)}><img src="/art/security/mark.svg" alt="" aria-hidden="true" draggable="false" decoding="async" style={({"position":"absolute","maxWidth":"none","left":"150px","top":"157px","width":"96px","height":"96px"} as React.CSSProperties)}/></div></div></div></div></div><img className="Security_grain__BtpNL" src="/art/security/grain.svg" srcSet="/art/security/grain.svg 1x, /art/security/grain-2x.svg 2x" alt="" aria-hidden="true" draggable="false" decoding="async"/></div>        <div className="Security_copy__oFXXi">
          <h2 className="Security_h2__I_4Bs" style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', overflow: 'clip', overflowClipMargin: '0.12em' }}>
              <span style={{ display: 'block', willChange: 'transform', transform: 'translateY(108%)' }}>
                <span id="security-title">Find your real exposure. Fix what matters.</span>
              </span>
            </span>
            <span style={{ display: 'block', overflow: 'clip', overflowClipMargin: '0.12em' }}>
              <span style={{ display: 'block', willChange: 'transform', transform: 'translateY(108%)' }}>
                <span>Prove it&apos;s handled.</span>
              </span>
            </span>
          </h2>
          <div className="Security_subRow__emynu" data-snap="true">
            <p className="Security_sub___4UtB" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              Cybersecurity, compliance and risk governance delivered by senior practitioners.
            </p>
          </div>
        </div>
        <ul className="Security_columns__awF9B">
          <li className="Security_column__KmoaI" data-snap="true">
            <div className="Security_columnBody__l__x_" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <h3 className="Security_title__Dga0L">Real exposure, not alerts</h3>
              <p className="Security_body__EQnnC">We cut through vendor noise to identify<br />what actually threatens your enterprise.</p>
            </div>
          </li>
          <li className="Security_column__KmoaI" data-snap="true">
            <div className="Security_columnBody__l__x_" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <h3 className="Security_title__Dga0L">Remediation that closes</h3>
              <p className="Security_body__EQnnC">We don&apos;t leave you with a PDF of findings.<br />Our engineers write and deploy fixes.</p>
            </div>
          </li>
          <li className="Security_column__KmoaI" data-snap="true">
            <div className="Security_columnBody__l__x_" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <h3 className="Security_title__Dga0L">Auditable compliance</h3>
              <p className="Security_body__EQnnC"><b className="Security_strong__mKiF2">SOC 2 Type II</b>, ISO 27001, HIPAA &amp; NIST<br />delivered with audit-ready proof.</p>
            </div>
          </li>
          <li className="Security_column__KmoaI" data-snap="true">
            <div className="Security_columnBody__l__x_" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <h3 className="Security_title__Dga0L">Platform-neutral tooling</h3>
              <p className="Security_body__EQnnC">CrowdStrike, Defender, Qualys, Splunk, Wiz<br />configured for your operating scale.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </div>
  );
};
