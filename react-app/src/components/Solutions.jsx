import React from 'react';
import { Check, Sparkles, FileText, Code, MonitorPlay } from 'lucide-react';

const Solutions = () => {
  return (
    <section id="solutions" className="section">
      <div className="container">
        <h2 className="sec-h text-c" data-reveal>Our <span className="text-grad">Services</span></h2>
        <p className="sec-p text-c" style={{ maxWidth: '700px', margin: '0 auto 3rem' }} data-reveal>Explore all the services we offer. Contact our team to start your project today.</p>

        {/* Services Tiers Explanation */}
        <div className="tier-explain-wrap" data-reveal style={{ marginBottom: '5rem' }}>
          <div className="tier-explain-grid">
            <div className="tier-explain-card tier-standard">
              <div className="tier-header">
                <span className="tier-badge">Normal Tier</span>
                <h3>Essential Solutions</h3>
                <p>Great quality services at an affordable price, perfect for small businesses and everyday projects.</p>
              </div>
              <ul className="tier-checklist">
                <li><Check className="check-icon" /> Quality work</li>
                <li><Check className="check-icon" /> Modern design</li>
                <li><Check className="check-icon" /> Reliable support</li>
                <li><Check className="check-icon" /> Clean output</li>
                <li><Check className="check-icon" /> Best for regular projects</li>
                <li><Check className="check-icon" /> Budget-friendly</li>
              </ul>
            </div>

            <div className="tier-explain-card tier-premium-gold">
              <div className="tier-glow"><MonitorPlay /></div>
              <div className="tier-header">
                <span className="tier-badge">Premium Tier</span>
                <h3>Premium Solutions</h3>
                <p>Advanced features, faster delivery, and special support for large businesses and complex projects.</p>
              </div>
              <ul className="tier-checklist">
                <li><Check className="check-icon" /> Premium design and development</li>
                <li><Check className="check-icon" /> Faster project delivery</li>
                <li><Check className="check-icon" /> Custom features</li>
                <li><Check className="check-icon" /> High-quality visuals</li>
                <li><Check className="check-icon" /> Dedicated support</li>
                <li><Check className="check-icon" /> Professional workflow</li>
                <li><Check className="check-icon" /> Best for business growth</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Category: Civil & BIM */}
        <div className="category-group" data-category="civil" data-reveal>
          <h3 className="category-group-title"><span className="text-grad">Civil & BIM</span> Services</h3>
          <div className="services-grid normal-tier" style={{ marginTop: '1.5rem' }}>

            {/* 01. Tekla Structures */}
            <div className="svc-card" data-reveal data-category="civil">
              <div className="svc-glow glow-purple"></div>
              <div className="svc-icon-box">
                <img src="./logo/TEKLA LOGO.png" alt="Tekla" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>Tekla Structures</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Tekla%20Structures%20-%20Steel%20Detailing." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Advanced Steel Detailing</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Tekla%20Structures%20-%20Fabrication%20Drawings." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Fabrication Schematics</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Tekla%20Structures%20-%20Connection%20Design." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Complex Connection Design</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzFvxZhTunP2Aa4RzfnfcDbFNfsvXTrbCuDZQnB42E-_Syvg/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20Tekla%20Structures" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 02. AutoCAD Drafting */}
            <div className="svc-card" data-reveal data-category="civil">
              <div className="svc-glow glow-blue"></div>
              <div className="svc-icon-box">
                <img src="./logo/AUTOCAD LOGO.webp" alt="AutoCAD" className="svc-logo-img" style={{ height: '65px', width: 'auto' }} />
              </div>
              <h3>AutoCAD Drafting</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20AutoCAD%20Drafting%20-%202D%20Technical%20Drafting." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Precision 2D Drafting</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20AutoCAD%20Drafting%20-%20Architectural%20Floor%20Plans." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Architectural Floor Plans</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20AutoCAD%20Drafting%20-%20Elevations%20%26%20Detail%20Drawings." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Elevation & Detailing</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSchPh6NMzWlvpbVmC4FBmI_DgdZ6EBQIcjyZqjLOLZUTEiDyg/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20AutoCAD%20Drafting" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 03. SketchUp & Rendering */}
            <div className="svc-card" data-reveal data-category="civil">
              <div className="svc-glow glow-gold"></div>
              <div className="svc-icon-box">
                <img src="./logo/SKETCH UP LOGO.jpg" alt="SketchUp" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>SketchUp & Rendering</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20SketchUp%20-%203D%20Architectural%20Modeling." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> 3D Architectural Visualization</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20SketchUp%20-%20Interior%20%26%20Exterior%20Renders." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Photorealistic Rendering</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20SketchUp%20-%20Lumion%20%26%20V-Ray." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Lumion & V-Ray Integration</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf89Y_eFjkRTXC7z_jwymOP-OFrISCJzb4p-aeFqOC0KcEkLg/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20SketchUp%20%26%20Rendering" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 04. STAAD.Pro */}
            <div className="svc-card" data-reveal data-category="civil">
              <div className="svc-glow glow-blue"></div>
              <div className="svc-icon-box">
                <img src="./logo/STAAD PRO LOGO.jpg" alt="STAAD" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>STAAD.Pro</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20STAAD.Pro%20-%20Structural%20Load%20Analysis." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Structural Load Analysis</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20STAAD.Pro%20-%20Steel%20%26%20Concrete%20Design." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Concrete & Steel Engineering</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20STAAD.Pro%20-%20Foundation%20Modeling." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Foundation Diagnostics</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfgbb1n5aFWqL9PbW6K12SNTVpPkrpTrT-lDdWV3lqelTm2-A/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20STAAD.Pro" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 05. ETABS */}
            <div className="svc-card" data-reveal data-category="civil">
              <div className="svc-glow glow-purple"></div>
              <div className="svc-icon-box">
                <img src="./logo/etabs.png" alt="ETABS" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>ETABS</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20ETABS%20-%20Multistory%20Building%20Design." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> High-Rise Building Design</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20ETABS%20-%20Seismic%20%26%20Wind%20Analysis." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Seismic & Wind Load Analysis</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20ETABS%20-%20Foundation%20Modeling." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Structural Integrity Assessment</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfgbb1n5aFWqL9PbW6K12SNTVpPkrpTrT-lDdWV3lqelTm2-A/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20ETABS" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 06. Revit Architecture (BIM) */}
            <div className="svc-card" data-reveal data-category="civil">
              <div className="svc-glow glow-blue"></div>
              <div className="svc-icon-box">
                <img src="./logo/REVIT LOGO.webp" alt="Revit" className="svc-logo-img" style={{ height: '65px', width: 'auto' }} />
              </div>
              <h3>Revit Architecture</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Revit%20Architecture%20-%20BIM%20Modeling." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Comprehensive BIM Modeling</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Revit%20Architecture%20-%20Revit%20Family%20Creation." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Parametric Family Creation</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Revit%20Architecture%20-%20Clash%20Detection." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Automated Clash Detection</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSduKQtJx-UfM3vyzCaC2zH5lKlVtU-3ABto2jIpCBUZhk2MxQ/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20Revit%20Architecture%20(BIM)" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 07. SAP2000 */}
            <div className="svc-card" data-reveal data-category="civil">
              <div className="svc-glow glow-blue"></div>
              <div className="svc-icon-box">
                <img src="./logo/sap2000.png" alt="SAP2000" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>SAP2000</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20SAP2000%20-%20Bridge%20%26%20Finite%20Element%20Modeling." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Bridge & Infrastructure Modeling</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20SAP2000%20-%20Linear%20%26%20Nonlinear%20Static%20Analysis." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Non-linear Static Analysis</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20SAP2000%20-%20Complex%20Structural%20Design." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Complex Structural Engineering</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfgbb1n5aFWqL9PbW6K12SNTVpPkrpTrT-lDdWV3lqelTm2-A/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20SAP2000" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 08. 3ds Max */}
            <div className="svc-card" data-reveal data-category="civil">
              <div className="svc-glow glow-gold"></div>
              <div className="svc-icon-box">
                <img src="./logo/3d max.png" alt="3ds Max" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>3ds Max</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%203ds%20Max%20-%203D%20Modeling." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> High-Fidelity 3D Modeling</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%203ds%20Max%20-%20High-Quality%20Rendering." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Cinematic Rendering</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%203ds%20Max%20-%20Animation." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Architectural Walkthroughs</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf89Y_eFjkRTXC7z_jwymOP-OFrISCJzb4p-aeFqOC0KcEkLg/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%203ds%20Max" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 09. Lumion */}
            <div className="svc-card" data-reveal data-category="civil">
              <div className="svc-glow glow-blue"></div>
              <div className="svc-icon-box">
                <img src="./logo/lumion.png" alt="Lumion" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>Lumion</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Lumion%20-%20Photorealistic%20Renders." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Photorealistic Renders</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Lumion%20-%20Exterior%20%26%20Interior." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Exterior & Interior Visualization</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Lumion%20-%20Architectural%20Animation." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Architectural Animation</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf89Y_eFjkRTXC7z_jwymOP-OFrISCJzb4p-aeFqOC0KcEkLg/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20Lumion" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

          </div>
        </div>

        {/* Category: Office & Documents */}
        <div className="category-group" data-category="office" data-reveal>
          <h3 className="category-group-title"><span className="text-grad">Office & Documents</span> Services</h3>
          <div className="services-grid normal-tier office-grid" style={{ marginTop: '1.5rem' }}>

            {/* 06. Microsoft Word */}
            <div className="svc-card" data-reveal data-category="office">
              <div className="svc-glow glow-blue"></div>
              <div className="svc-icon-box">
                <img src="./logo/word-c536.png" alt="Word" className="svc-logo-img" style={{ height: '65px', width: 'auto' }} />
              </div>
              <h3>Microsoft Word</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Microsoft%20Word%20-%20Professional%20Document%20Formatting." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Corporate Document Formatting</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Microsoft%20Word%20-%20ATS-Friendly%20Resumes%20%26%20Portfolios." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> ATS-Optimized Resumes</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Microsoft%20Word%20-%20Business%20Reports." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Executive Business Reports</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-MhiZxyBBlXs6I6gE-zlrgMl7ZEzX5BDp78py5SzRVsRgUg/viewform?pli=1" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20Microsoft%20Word" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 08. Microsoft Excel */}
            <div className="svc-card" data-reveal data-category="office">
              <div className="svc-glow glow-emerald" style={{ background: '#107c41' }}></div>
              <div className="svc-icon-box">
                <img src="./logo/excel-logo-24ae.png" alt="Excel" className="svc-logo-img" style={{ height: '65px', width: 'auto' }} />
              </div>
              <h3>Microsoft Excel</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Microsoft%20Excel%20-%20Smart%20Excel%20Dashboards." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Dynamic Data Dashboards</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Microsoft%20Excel%20-%20Advanced%20Formulas." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Advanced Data Modeling</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Microsoft%20Excel%20-%20Spreadsheet%20Automation." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Automated Workflow Spreadsheets</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeD5PcK-T-ey87jy42BD4E7MRlEWY_rbdt5SWniEzDjt6pi1A/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20Microsoft%20Excel" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 09. PowerPoint */}
            <div className="svc-card" data-reveal data-category="office">
              <div className="svc-glow glow-rose" style={{ background: '#d24726' }}></div>
              <div className="svc-icon-box">
                <img src="./logo/power point.png" alt="PowerPoint" className="svc-logo-img" style={{ height: '65px', width: 'auto' }} />
              </div>
              <h3>PowerPoint</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20PowerPoint%20%26%20Typing%20-%20Investor%20Pitch%20Decks." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Executive Pitch Decks</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20PowerPoint%20%26%20Typing%20-%20Presentation%20Design." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Corporate Presentations</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20PowerPoint%20%26%20Typing%20-%20Tamil%20%26%20English%20Typing." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Multilingual Data Entry</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://forms.gle/ewusky76in9eE5rc7" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20PowerPoint%20%26%20Typing" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 07. Resume & Portfolio Design */}
            <div className="svc-card" data-reveal data-category="office">
              <div className="svc-glow glow-blue"></div>
              <div className="svc-icon-box" style={{ color: 'var(--primary)' }}>
                <FileText />
              </div>
              <h3>Resume & Portfolio Design</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Resume%20-%20ATS-Friendly%20Resume%20Formatting." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Executive Career Profiles</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Resume%20-%20Professional%20Career%20Resumes." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Academic Portfolios</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Resume%20-%20Academic%20%26%20Corporate%20Portfolios." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Corporate Branding Collateral</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://forms.gle/NX2T8y5Xe7eCGnsF7" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20Resume%20%26%20Portfolio%20Design" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>
          </div>
        </div>

        {/* Category: Creative & Media */}
        <div className="category-group" data-category="creative" data-reveal>
          <h3 className="category-group-title"><span className="text-grad">Creative & Media</span> Services</h3>
          <div className="services-grid normal-tier" style={{ marginTop: '1.5rem' }}>

            {/* 01. Creativity */}
            <div className="svc-card" data-reveal data-category="creative">
              <div className="svc-glow glow-blue"></div>
              <div className="svc-icon-box">
                <img src="./logo/creativity.png" alt="Creativity" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>Creative Direction</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Creativity%20-%20Concept%20%26%20Ideation." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Strategic Concept Planning</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Creativity%20-%20Art%20Direction." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Brand Storytelling</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Creativity%20-%20Brand%20Storytelling." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Premium Copywriting</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScVbrMRp8LOi3_pOWWsNXnVcGEyRKoMdcgfHg8OoRmcyfmePw/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20Creativity" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 02. Social Media Maintenance */}
            <div className="svc-card" data-reveal data-category="creative">
              <div className="svc-glow glow-purple"></div>
              <div className="svc-icon-box">
                <img src="./logo/social media.png" alt="Social Media" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>Social Media page development</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Social%20Media%20Maintenance%20-%20Account%20Management." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Social Platform Management</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Social%20Media%20Maintenance%20-%20Content%20Strategy." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Content Strategy & Planning</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Social%20Media%20Maintenance%20-%20Audience%20Engagement." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Audience Engagement & Growth</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScVbrMRp8LOi3_pOWWsNXnVcGEyRKoMdcgfHg8OoRmcyfmePw/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20Social%20Media%20Maintenance" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 03. Logo Design */}
            <div className="svc-card" data-reveal data-category="creative">
              <div className="svc-glow glow-gold"></div>
              <div className="svc-icon-box">
                <img src="./logo/logo.jpeg" alt="Logo Design" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>Corporate Identity Design</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Logo%20Design%20-%20Signature%20Logo." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Executive Logos</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Logo%20Design%20-%20Brand%20Identity." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Complete Brand Guidelines</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Logo%20Design%20-%20Minimalist%20Designs." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Scalable Vector Assets</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScVbrMRp8LOi3_pOWWsNXnVcGEyRKoMdcgfHg8OoRmcyfmePw/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20Logo%20Design" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 04. Poster Design */}
            <div className="svc-card" data-reveal data-category="creative">
              <div className="svc-glow glow-blue"></div>
              <div className="svc-icon-box">
                <img src="./logo/poster.png" alt="Poster Design" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>Marketing Collateral</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Poster%20Design%20-%20Event%20Posters." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> High-Impact Event Posters</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Poster%20Design%20-%20Business%20Flyers." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Corporate Banners & Flyers</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Poster%20Design%20-%20Social%20Media%20Graphics." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Engaging Social Media Graphics</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScVbrMRp8LOi3_pOWWsNXnVcGEyRKoMdcgfHg8OoRmcyfmePw/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20Poster%20Design" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 05. CapCut Video Editing */}
            <div className="svc-card" data-reveal data-category="creative">
              <div className="svc-glow glow-rose" style={{ background: '#e91e63' }}></div>
              <div className="svc-icon-box">
                <img src="./logo/CAPCUT LOGO.webp" alt="CapCut" className="svc-logo-img" style={{ height: '65px', width: 'auto' }} />
              </div>
              <h3>Digital Video Production</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Cinematic%20CapCut%20Reel%20Editing%20-%20Cinematic%20Reels." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Corporate Reels</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Cinematic%20CapCut%20Reel%20Editing%20-%20Transitions." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Seamless Transitions</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Cinematic%20CapCut%20Reel%20Editing%20-%20Transitions." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Professional Audio Sync</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Cinematic%20CapCut%20Reel%20Editing%20-%20Color%20Grading." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Cinematic Color Grading</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0S4hx8x-IXCRDKuxx0jexTMHRtE51dDmgQN5IlK7pBxfZvQ/viewform" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20Reel%20Editing%20for%20CapCut%20(Cinematic)" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>
          </div>
        </div>

        {/* Category: Software & AI */}
        <div className="category-group" data-category="software" data-reveal>
          <h3 className="category-group-title"><span className="text-grad">Software & AI</span> Services</h3>
          <div className="services-grid normal-tier" style={{ marginTop: '1.5rem' }}>

            {/* 02. App Development */}
            <div className="svc-card" data-reveal data-category="software">
              <div className="svc-glow glow-gold"></div>
              <div className="svc-icon-box">
                <img src="./logo/app development.png" alt="App Development" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>Mobile Engineering</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20App%20Development%20-%20Android%20Apps." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Native Android Architecture</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20App%20Development%20-%20iOS%20Apps." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Native iOS Solutions</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20App%20Development%20-%20Cross-Platform." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Cross-Platform Applications</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://forms.gle/rLibVD8f434SAkzXA" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20App%20Development" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 01. Web Development */}
            <div className="svc-card" data-reveal data-category="software">
              <div className="svc-glow glow-blue"></div>
              <div className="svc-icon-box">
                <img src="./logo/web.png" alt="Web Development" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>Web Engineering</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Web%20Development%20-%20Portfolio%20Website." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> High-Performance Web Apps</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Web%20Development%20-%20Blog%20Website." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Enterprise Content Management</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Web%20Development%20-%20E-Commerce%20Website." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Scalable E-commerce Platforms</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20Web%20Development%20-%20Business%20Website." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Corporate Web Portals</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://forms.gle/rLibVD8f434SAkzXA" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20Web%20Development" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

            {/* 03. AI Automations */}
            <div className="svc-card" data-reveal data-category="software">
              <div className="svc-glow glow-rose"></div>
              <div className="svc-icon-box">
                <img src="./logo/automation.png" alt="AI Automation" className="svc-logo-img" style={{ height: '65px', width: 'auto', borderRadius: '4px' }} />
              </div>
              <h3>Intelligent Automation</h3>
              <ul className="svc-features">
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20AI%20Automations%20-%20Chatbots." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Conversational AI & NLP</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20AI%20Automations%20-%20Task%20Automation." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Business Process Automation</a></li>
                <li><a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20an%20appointment%20for%20AI%20Automations%20-%20Custom%20AI%20Tools." target="_blank" rel="noreferrer"><Sparkles className="feat-icon" style={{ color: 'var(--primary) !important' }} /> Custom Machine Learning Solutions</a></li>
              </ul>
              <div className="svc-btns">
                <a href="https://forms.gle/rLibVD8f434SAkzXA" target="_blank" rel="noreferrer" className="btn btn-glass btn-normal">Normal</a>
                <a href="https://wa.me/917904509269?text=Hello%20NGS%20Soft%20Works%2C%20I%20want%20to%20book%20a%20Premium%20appointment%20for%20AI%20Automations" target="_blank" rel="noreferrer" className="btn btn-glass btn-premium">Premium</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
