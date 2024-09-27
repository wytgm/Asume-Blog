<template>
  <div class="container mx-auto sm:container">
    <div class="starilbg"></div>

  <div style="z-index: 1;width: 250px;height: 250px;position: absolute;top: 45px;left: 40px;rotate: 0deg;">
    <button style="z-index: 2;" class="btn btn-ghost w-full h-full" onclick="window.location.href='/herta';">
    <svg id="circleherta" style="z-index:6;" class="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 349 306">
        <defs>
          <clipPath id="circleClip">
            <circle id="threecircle" class="circle-7" cx="178.46" cy="153.61" r="93.6"/>
          </clipPath>
          <filter id="blurFilter">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <polyline class="circle-1" points="181.69 5.15 177.92 23.98 185.45 23.98 181.69 5.15"/>
        <polyline class="circle-1" points="30 151.73 48.83 155.5 48.83 147.97 30 151.73"/>
        <polyline class="circle-1" points="328 156.57 309.17 152.81 309.17 160.34 328 156.57"/>
        <polyline class="circle-1" points="174.97 301 178.73 282.17 171.2 282.17 174.97 301"/>
        <circle id="twocircle" class="circle-3" cx="178.46" cy="153.61" r="118.88"/>
        <g id="circle">
          <path class="circle-4" d="M104.77,45.49c54.87-30.12,102.74-30.66,155.99,6.45"/>
          <path class="circle-4" d="M284.97,78.84s52.71,69.93-2.15,150.08"/>
          <path class="circle-4" d="M99.93,257.97s62.4,51.64,152.23,4.3"/>
          <path class="circle-4" d="M74.65,76.69s-56.48,66.16-3.77,149.54"/>
        </g>
        <g id="leftop">
          <path class="circle-2" d="M64.69,31.78s-2.15-2.15-3.77-.54c-1.4,1.4,1.08,3.77,1.08,3.77l21.52,24.21s4.3,4.84,3.77,9.68-1.61,5.92-1.61,5.92h16.93l1.36-16.68s-4.84,1.61-9.14.54-19.36-16.68-19.36-16.68l-10.76-10.22Z"/>
          <path class="circle-5" d="M91.59,64.59s-2.15-2.69-1.61-3.23,3.5,1.61,3.5,1.61c0,0,1.34.54,2.42.54s3.23-.54,3.23-.54l-.54,7.53h-7.03s.58,0,.58-2.15-.54-3.77-.54-3.77Z"/>
          <circle class="circle-2" cx="55.82" cy="25.59" r="2.96"/>
        </g>
        <g id="rightop">
          <path class="circle-2" d="M300.85,38.75s2.15-2.15.54-3.77c-1.4-1.4-3.77,1.08-3.77,1.08l-24.21,21.52s-4.84,4.3-9.68,3.77-5.92-1.61-5.92-1.61v16.93l16.68,1.36s-1.61-4.84-.54-9.14,16.68-19.36,16.68-19.36l10.22-10.76Z"/>
          <path class="circle-5" d="M268.04,65.65s2.69-2.15,3.23-1.61-1.61,3.5-1.61,3.5c0,0-.54,1.34-.54,2.42s.54,3.23.54,3.23l-7.53-.54v-7.03s0,.58,2.15.58,3.77-.54,3.77-.54Z"/>
          <circle class="circle-2" cx="307.04" cy="29.88" r="2.96"/>
        </g>
        <g id="leftbottom">
          <path class="circle-2" d="M56.1,267.93s-2.15,2.15-.54,3.77c1.4,1.4,3.77-1.08,3.77-1.08l24.21-21.52s4.84-4.3,9.68-3.77,5.92,1.61,5.92,1.61v-16.93s-16.68-1.36-16.68-1.36c0,0,1.61,4.84.54,9.14s-16.68,19.36-16.68,19.36l-10.22,10.76Z"/>
          <path class="circle-5" d="M88.92,241.04s-2.69,2.15-3.23,1.61,1.61-3.5,1.61-3.5c0,0,.54-1.34.54-2.42s-.54-3.23-.54-3.23l7.53.54v7.03s0-.58-2.15-.58-3.77.54-3.77.54Z"/>
          <circle class="circle-2" cx="49.92" cy="276.81" r="2.96"/>
        </g>
        <g id="rightbottom">
          <path class="circle-2" d="M291.19,274.91s2.15,2.15,3.77.54c1.4-1.4-1.08-3.77-1.08-3.77l-21.52-24.21s-4.3-4.84-3.77-9.68,1.61-5.92,1.61-5.92h-16.93s-1.36,16.68-1.36,16.68c0,0,4.84-1.61,9.14-.54s19.36,16.68,19.36,16.68l10.76,10.22Z"/>
          <path class="circle-5" d="M264.29,242.1s2.15,2.69,1.61,3.23-3.5-1.61-3.5-1.61c0,0-1.34-.54-2.42-.54s-3.23.54-3.23.54l.54-7.53h7.03s-.58,0-.58,2.15.54,3.77.54,3.77Z"/>
          <circle class="circle-2" cx="300.06" cy="281.1" r="2.96"/>
        </g>
        <g id="neicircle">
          <ellipse class="circle-1" cx="180.34" cy="58.4" rx="2.96" ry="2.69"/>
          <ellipse class="circle-1" cx="176.04" cy="248.82" rx="2.96" ry="2.69"/>
          <ellipse class="circle-1" cx="273.67" cy="155.5" rx="2.69" ry="2.96"/>
          <ellipse class="circle-1" cx="83.25" cy="152.27" rx="2.69" ry="2.96"/>
        </g>
        <circle id="threecircle"  cx="178.46" cy="153.61" r="93.6"/>
        <g>
          <line class="circle-6" x1="178.32" y1="266.94" x2="178.6" y2="272.18"/>
          <line class="circle-6" x1="169.45" y1="266.58" x2="169.32" y2="271.83"/>
          <line class="circle-6" x1="160.64" y1="265.52" x2="160.1" y2="270.75"/>
          <line class="circle-6" x1="151.94" y1="263.78" x2="150.99" y2="268.95"/>
          <line class="circle-6" x1="143.4" y1="261.36" x2="142.05" y2="266.44"/>
          <line class="circle-6" x1="135.08" y1="258.28" x2="133.33" y2="263.24"/>
          <line class="circle-6" x1="127.02" y1="254.55" x2="124.89" y2="259.36"/>
          <line class="circle-6" x1="119.28" y1="250.21" x2="116.79" y2="254.83"/>
          <line class="circle-6" x1="111.91" y1="245.27" x2="109.06" y2="249.68"/>
          <line class="circle-6" x1="104.95" y1="239.77" x2="101.76" y2="243.94"/>
          <line class="circle-6" x1="98.44" y1="233.73" x2="94.93" y2="237.64"/>
          <line class="circle-6" x1="92.42" y1="227.21" x2="88.62" y2="230.83"/>
          <line class="circle-6" x1="86.94" y1="220.23" x2="82.86" y2="223.55"/>
          <line class="circle-6" x1="82.02" y1="212.85" x2="77.69" y2="215.83"/>
          <line class="circle-6" x1="77.69" y1="205.1" x2="73.15" y2="207.73"/>
          <line class="circle-6" x1="73.98" y1="197.03" x2="69.25" y2="199.3"/>
          <line class="circle-6" x1="70.92" y1="188.7" x2="66.02" y2="190.59"/>
          <line class="circle-6" x1="68.52" y1="180.16" x2="63.49" y2="181.66"/>
          <line class="circle-6" x1="66.8" y1="171.45" x2="61.67" y2="172.55"/>
          <line class="circle-6" x1="65.77" y1="162.64" x2="60.57" y2="163.33"/>
          <line class="circle-6" x1="65.44" y1="153.77" x2="60.19" y2="154.05"/>
          <line class="circle-6" x1="65.79" y1="144.9" x2="60.54" y2="144.77"/>
          <line class="circle-6" x1="66.85" y1="136.09" x2="61.62" y2="135.55"/>
          <line class="circle-6" x1="68.59" y1="127.39" x2="63.42" y2="126.44"/>
          <line class="circle-6" x1="71.01" y1="118.85" x2="65.93" y2="117.5"/>
          <line class="circle-6" x1="74.09" y1="110.53" x2="69.14" y2="108.78"/>
          <line class="circle-6" x1="77.82" y1="102.47" x2="73.02" y2="100.34"/>
          <line class="circle-6" x1="82.16" y1="94.73" x2="77.54" y2="92.23"/>
          <line class="circle-6" x1="87.1" y1="87.36" x2="82.69" y2="84.51"/>
          <line class="circle-6" x1="92.61" y1="80.4" x2="88.43" y2="77.21"/>
          <line class="circle-6" x1="98.64" y1="73.89" x2="94.73" y2="70.38"/>
          <line class="circle-6" x1="105.16" y1="67.87" x2="101.54" y2="64.07"/>
          <line class="circle-6" x1="112.14" y1="62.39" x2="108.83" y2="58.31"/>
          <line class="circle-6" x1="119.53" y1="57.47" x2="116.54" y2="53.14"/>
          <line class="circle-6" x1="127.28" y1="53.14" x2="124.64" y2="48.59"/>
          <line class="circle-6" x1="135.34" y1="49.43" x2="133.07" y2="44.7"/>
          <line class="circle-6" x1="143.67" y1="46.37" x2="141.78" y2="41.47"/>
          <line class="circle-6" x1="152.21" y1="43.97" x2="150.71" y2="38.94"/>
          <line class="circle-6" x1="160.92" y1="42.25" x2="159.82" y2="37.12"/>
          <line class="circle-6" x1="169.74" y1="41.22" x2="169.04" y2="36.01"/>
          <line class="circle-6" x1="178.6" y1="40.88" x2="178.32" y2="35.64"/>
          <line class="circle-6" x1="187.47" y1="41.24" x2="187.6" y2="35.99"/>
          <line class="circle-6" x1="196.28" y1="42.3" x2="196.82" y2="37.07"/>
          <line class="circle-6" x1="204.99" y1="44.04" x2="205.93" y2="38.87"/>
          <line class="circle-6" x1="213.52" y1="46.46" x2="214.88" y2="41.38"/>
          <line class="circle-6" x1="221.85" y1="49.54" x2="223.59" y2="44.59"/>
          <line class="circle-6" x1="229.9" y1="53.27" x2="232.03" y2="48.46"/>
          <line class="circle-6" x1="237.64" y1="57.61" x2="240.14" y2="52.99"/>
          <line class="circle-6" x1="245.01" y1="62.55" x2="247.87" y2="58.14"/>
          <line class="circle-6" x1="251.98" y1="68.06" x2="255.17" y2="63.88"/>
          <line class="circle-6" x1="258.48" y1="74.09" x2="261.99" y2="70.18"/>
          <line class="circle-6" x1="264.5" y1="80.61" x2="268.3" y2="76.99"/>
          <line class="circle-6" x1="269.99" y1="87.59" x2="274.06" y2="84.28"/>
          <line class="circle-6" x1="274.91" y1="94.98" x2="279.23" y2="91.99"/>
          <line class="circle-6" x1="279.23" y1="102.72" x2="283.78" y2="100.09"/>
          <line class="circle-6" x1="282.94" y1="110.79" x2="287.68" y2="108.52"/>
          <line class="circle-6" x1="286" y1="119.12" x2="290.9" y2="117.23"/>
          <line class="circle-6" x1="288.4" y1="127.66" x2="293.43" y2="126.16"/>
          <line class="circle-6" x1="290.12" y1="136.37" x2="295.26" y2="135.27"/>
          <line class="circle-6" x1="291.15" y1="145.18" x2="296.36" y2="144.49"/>
          <line class="circle-6" x1="291.49" y1="154.05" x2="296.73" y2="153.77"/>
          <line class="circle-6" x1="291.13" y1="162.92" x2="296.38" y2="163.05"/>
          <line class="circle-6" x1="290.08" y1="171.73" x2="295.3" y2="172.27"/>
          <line class="circle-6" x1="288.33" y1="180.43" x2="293.5" y2="181.38"/>
          <line class="circle-6" x1="285.91" y1="188.97" x2="290.99" y2="190.32"/>
          <line class="circle-6" x1="282.83" y1="197.3" x2="287.79" y2="199.04"/>
          <line class="circle-6" x1="279.11" y1="205.35" x2="283.91" y2="207.48"/>
          <line class="circle-6" x1="274.76" y1="213.09" x2="279.38" y2="215.59"/>
          <line class="circle-6" x1="269.82" y1="220.46" x2="274.23" y2="223.31"/>
          <line class="circle-6" x1="264.32" y1="227.42" x2="268.49" y2="230.61"/>
          <line class="circle-6" x1="258.28" y1="233.93" x2="262.19" y2="237.44"/>
          <line class="circle-6" x1="251.76" y1="239.95" x2="255.38" y2="243.75"/>
          <line class="circle-6" x1="244.78" y1="245.44" x2="248.1" y2="249.51"/>
          <line class="circle-6" x1="237.4" y1="250.36" x2="240.38" y2="254.68"/>
          <line class="circle-6" x1="229.65" y1="254.68" x2="232.28" y2="259.23"/>
          <line class="circle-6" x1="221.58" y1="258.39" x2="223.85" y2="263.13"/>
          <line class="circle-6" x1="213.25" y1="261.45" x2="215.14" y2="266.35"/>
          <line class="circle-6" x1="204.71" y1="263.85" x2="206.21" y2="268.88"/>
          <line class="circle-6" x1="196" y1="265.57" x2="197.1" y2="270.7"/>
          <line class="circle-6" x1="187.19" y1="266.6" x2="187.88" y2="271.81"/>
        </g>
        <image class="w-full h-full object-cover"  
        href="https://webstatic.hoyoverse.com/upload/op-public/2022/10/20/98abebb9cc9a28050df30d0debf0b210_1304921326218734874.png" 
        width="100%" height="100%" 
        clip-path="url(#circleClip)"
        filter="url(#blurFilter)"/>
    </svg>
    <img 
    id="herta" 
    style="z-index:7;
    scale: 1.2;
    transform: rotateY(180deg);" 
    class="w-full h-full 
    object-cover 
    relative 
    -top-52 left-0" 
    src="https://i.111666.best/image/6FYDLAKTb90mlRNpVIlcwO.png" alt="">
      <div style="z-index:3;position: absolute;top: 180px;left: 128px;color: black;width: 250px;height: 50px;">
      <span style="vertical-align: middle">空间站【黑塔】</span> 
      </div>  
  </button>
  </div> 


  <div style="z-index: 1; width: 350px;height: 350px;position: absolute;top: 298px;left: 250px;rotate: 35deg">
    <button style="z-index: 2;" class="btn btn-ghost w-full h-full" onclick="window.open('/', '_blank')">
    <svg style="z-index:6;" class="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 349 306">
        <defs>
          <clipPath id="circleClip">
            <circle id="threecircle" class="circle-7" cx="178.46" cy="153.61" r="93.6"/>
          </clipPath>
          <filter id="blurFilter">
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>
        <polyline class="circle-1" points="181.69 5.15 177.92 23.98 185.45 23.98 181.69 5.15"/>
        <polyline class="circle-1" points="30 151.73 48.83 155.5 48.83 147.97 30 151.73"/>
        <polyline class="circle-1" points="328 156.57 309.17 152.81 309.17 160.34 328 156.57"/>
        <polyline class="circle-1" points="174.97 301 178.73 282.17 171.2 282.17 174.97 301"/>
        <circle id="twocircle" class="circle-3" cx="178.46" cy="153.61" r="118.88"/>
        <g id="circle">
          <path class="circle-4" d="M104.77,45.49c54.87-30.12,102.74-30.66,155.99,6.45"/>
          <path class="circle-4" d="M284.97,78.84s52.71,69.93-2.15,150.08"/>
          <path class="circle-4" d="M99.93,257.97s62.4,51.64,152.23,4.3"/>
          <path class="circle-4" d="M74.65,76.69s-56.48,66.16-3.77,149.54"/>
        </g>
        <g id="leftop">
          <path class="circle-2" d="M64.69,31.78s-2.15-2.15-3.77-.54c-1.4,1.4,1.08,3.77,1.08,3.77l21.52,24.21s4.3,4.84,3.77,9.68-1.61,5.92-1.61,5.92h16.93l1.36-16.68s-4.84,1.61-9.14.54-19.36-16.68-19.36-16.68l-10.76-10.22Z"/>
          <path class="circle-5" d="M91.59,64.59s-2.15-2.69-1.61-3.23,3.5,1.61,3.5,1.61c0,0,1.34.54,2.42.54s3.23-.54,3.23-.54l-.54,7.53h-7.03s.58,0,.58-2.15-.54-3.77-.54-3.77Z"/>
          <circle class="circle-2" cx="55.82" cy="25.59" r="2.96"/>
        </g>
        <g id="rightop">
          <path class="circle-2" d="M300.85,38.75s2.15-2.15.54-3.77c-1.4-1.4-3.77,1.08-3.77,1.08l-24.21,21.52s-4.84,4.3-9.68,3.77-5.92-1.61-5.92-1.61v16.93l16.68,1.36s-1.61-4.84-.54-9.14,16.68-19.36,16.68-19.36l10.22-10.76Z"/>
          <path class="circle-5" d="M268.04,65.65s2.69-2.15,3.23-1.61-1.61,3.5-1.61,3.5c0,0-.54,1.34-.54,2.42s.54,3.23.54,3.23l-7.53-.54v-7.03s0,.58,2.15.58,3.77-.54,3.77-.54Z"/>
          <circle class="circle-2" cx="307.04" cy="29.88" r="2.96"/>
        </g>
        <g id="leftbottom">
          <path class="circle-2" d="M56.1,267.93s-2.15,2.15-.54,3.77c1.4,1.4,3.77-1.08,3.77-1.08l24.21-21.52s4.84-4.3,9.68-3.77,5.92,1.61,5.92,1.61v-16.93s-16.68-1.36-16.68-1.36c0,0,1.61,4.84.54,9.14s-16.68,19.36-16.68,19.36l-10.22,10.76Z"/>
          <path class="circle-5" d="M88.92,241.04s-2.69,2.15-3.23,1.61,1.61-3.5,1.61-3.5c0,0,.54-1.34.54-2.42s-.54-3.23-.54-3.23l7.53.54v7.03s0-.58-2.15-.58-3.77.54-3.77.54Z"/>
          <circle class="circle-2" cx="49.92" cy="276.81" r="2.96"/>
        </g>
        <g id="rightbottom">
          <path class="circle-2" d="M291.19,274.91s2.15,2.15,3.77.54c1.4-1.4-1.08-3.77-1.08-3.77l-21.52-24.21s-4.3-4.84-3.77-9.68,1.61-5.92,1.61-5.92h-16.93s-1.36,16.68-1.36,16.68c0,0,4.84-1.61,9.14-.54s19.36,16.68,19.36,16.68l10.76,10.22Z"/>
          <path class="circle-5" d="M264.29,242.1s2.15,2.69,1.61,3.23-3.5-1.61-3.5-1.61c0,0-1.34-.54-2.42-.54s-3.23.54-3.23.54l.54-7.53h7.03s-.58,0-.58,2.15.54,3.77.54,3.77Z"/>
          <circle class="circle-2" cx="300.06" cy="281.1" r="2.96"/>
        </g>
        <g id="neicircle">
          <ellipse class="circle-1" cx="180.34" cy="58.4" rx="2.96" ry="2.69"/>
          <ellipse class="circle-1" cx="176.04" cy="248.82" rx="2.96" ry="2.69"/>
          <ellipse class="circle-1" cx="273.67" cy="155.5" rx="2.69" ry="2.96"/>
          <ellipse class="circle-1" cx="83.25" cy="152.27" rx="2.69" ry="2.96"/>
        </g>
        <circle id="threecircle"  cx="178.46" cy="153.61" r="93.6"/>
        <g>
          <line class="circle-6" x1="178.32" y1="266.94" x2="178.6" y2="272.18"/>
          <line class="circle-6" x1="169.45" y1="266.58" x2="169.32" y2="271.83"/>
          <line class="circle-6" x1="160.64" y1="265.52" x2="160.1" y2="270.75"/>
          <line class="circle-6" x1="151.94" y1="263.78" x2="150.99" y2="268.95"/>
          <line class="circle-6" x1="143.4" y1="261.36" x2="142.05" y2="266.44"/>
          <line class="circle-6" x1="135.08" y1="258.28" x2="133.33" y2="263.24"/>
          <line class="circle-6" x1="127.02" y1="254.55" x2="124.89" y2="259.36"/>
          <line class="circle-6" x1="119.28" y1="250.21" x2="116.79" y2="254.83"/>
          <line class="circle-6" x1="111.91" y1="245.27" x2="109.06" y2="249.68"/>
          <line class="circle-6" x1="104.95" y1="239.77" x2="101.76" y2="243.94"/>
          <line class="circle-6" x1="98.44" y1="233.73" x2="94.93" y2="237.64"/>
          <line class="circle-6" x1="92.42" y1="227.21" x2="88.62" y2="230.83"/>
          <line class="circle-6" x1="86.94" y1="220.23" x2="82.86" y2="223.55"/>
          <line class="circle-6" x1="82.02" y1="212.85" x2="77.69" y2="215.83"/>
          <line class="circle-6" x1="77.69" y1="205.1" x2="73.15" y2="207.73"/>
          <line class="circle-6" x1="73.98" y1="197.03" x2="69.25" y2="199.3"/>
          <line class="circle-6" x1="70.92" y1="188.7" x2="66.02" y2="190.59"/>
          <line class="circle-6" x1="68.52" y1="180.16" x2="63.49" y2="181.66"/>
          <line class="circle-6" x1="66.8" y1="171.45" x2="61.67" y2="172.55"/>
          <line class="circle-6" x1="65.77" y1="162.64" x2="60.57" y2="163.33"/>
          <line class="circle-6" x1="65.44" y1="153.77" x2="60.19" y2="154.05"/>
          <line class="circle-6" x1="65.79" y1="144.9" x2="60.54" y2="144.77"/>
          <line class="circle-6" x1="66.85" y1="136.09" x2="61.62" y2="135.55"/>
          <line class="circle-6" x1="68.59" y1="127.39" x2="63.42" y2="126.44"/>
          <line class="circle-6" x1="71.01" y1="118.85" x2="65.93" y2="117.5"/>
          <line class="circle-6" x1="74.09" y1="110.53" x2="69.14" y2="108.78"/>
          <line class="circle-6" x1="77.82" y1="102.47" x2="73.02" y2="100.34"/>
          <line class="circle-6" x1="82.16" y1="94.73" x2="77.54" y2="92.23"/>
          <line class="circle-6" x1="87.1" y1="87.36" x2="82.69" y2="84.51"/>
          <line class="circle-6" x1="92.61" y1="80.4" x2="88.43" y2="77.21"/>
          <line class="circle-6" x1="98.64" y1="73.89" x2="94.73" y2="70.38"/>
          <line class="circle-6" x1="105.16" y1="67.87" x2="101.54" y2="64.07"/>
          <line class="circle-6" x1="112.14" y1="62.39" x2="108.83" y2="58.31"/>
          <line class="circle-6" x1="119.53" y1="57.47" x2="116.54" y2="53.14"/>
          <line class="circle-6" x1="127.28" y1="53.14" x2="124.64" y2="48.59"/>
          <line class="circle-6" x1="135.34" y1="49.43" x2="133.07" y2="44.7"/>
          <line class="circle-6" x1="143.67" y1="46.37" x2="141.78" y2="41.47"/>
          <line class="circle-6" x1="152.21" y1="43.97" x2="150.71" y2="38.94"/>
          <line class="circle-6" x1="160.92" y1="42.25" x2="159.82" y2="37.12"/>
          <line class="circle-6" x1="169.74" y1="41.22" x2="169.04" y2="36.01"/>
          <line class="circle-6" x1="178.6" y1="40.88" x2="178.32" y2="35.64"/>
          <line class="circle-6" x1="187.47" y1="41.24" x2="187.6" y2="35.99"/>
          <line class="circle-6" x1="196.28" y1="42.3" x2="196.82" y2="37.07"/>
          <line class="circle-6" x1="204.99" y1="44.04" x2="205.93" y2="38.87"/>
          <line class="circle-6" x1="213.52" y1="46.46" x2="214.88" y2="41.38"/>
          <line class="circle-6" x1="221.85" y1="49.54" x2="223.59" y2="44.59"/>
          <line class="circle-6" x1="229.9" y1="53.27" x2="232.03" y2="48.46"/>
          <line class="circle-6" x1="237.64" y1="57.61" x2="240.14" y2="52.99"/>
          <line class="circle-6" x1="245.01" y1="62.55" x2="247.87" y2="58.14"/>
          <line class="circle-6" x1="251.98" y1="68.06" x2="255.17" y2="63.88"/>
          <line class="circle-6" x1="258.48" y1="74.09" x2="261.99" y2="70.18"/>
          <line class="circle-6" x1="264.5" y1="80.61" x2="268.3" y2="76.99"/>
          <line class="circle-6" x1="269.99" y1="87.59" x2="274.06" y2="84.28"/>
          <line class="circle-6" x1="274.91" y1="94.98" x2="279.23" y2="91.99"/>
          <line class="circle-6" x1="279.23" y1="102.72" x2="283.78" y2="100.09"/>
          <line class="circle-6" x1="282.94" y1="110.79" x2="287.68" y2="108.52"/>
          <line class="circle-6" x1="286" y1="119.12" x2="290.9" y2="117.23"/>
          <line class="circle-6" x1="288.4" y1="127.66" x2="293.43" y2="126.16"/>
          <line class="circle-6" x1="290.12" y1="136.37" x2="295.26" y2="135.27"/>
          <line class="circle-6" x1="291.15" y1="145.18" x2="296.36" y2="144.49"/>
          <line class="circle-6" x1="291.49" y1="154.05" x2="296.73" y2="153.77"/>
          <line class="circle-6" x1="291.13" y1="162.92" x2="296.38" y2="163.05"/>
          <line class="circle-6" x1="290.08" y1="171.73" x2="295.3" y2="172.27"/>
          <line class="circle-6" x1="288.33" y1="180.43" x2="293.5" y2="181.38"/>
          <line class="circle-6" x1="285.91" y1="188.97" x2="290.99" y2="190.32"/>
          <line class="circle-6" x1="282.83" y1="197.3" x2="287.79" y2="199.04"/>
          <line class="circle-6" x1="279.11" y1="205.35" x2="283.91" y2="207.48"/>
          <line class="circle-6" x1="274.76" y1="213.09" x2="279.38" y2="215.59"/>
          <line class="circle-6" x1="269.82" y1="220.46" x2="274.23" y2="223.31"/>
          <line class="circle-6" x1="264.32" y1="227.42" x2="268.49" y2="230.61"/>
          <line class="circle-6" x1="258.28" y1="233.93" x2="262.19" y2="237.44"/>
          <line class="circle-6" x1="251.76" y1="239.95" x2="255.38" y2="243.75"/>
          <line class="circle-6" x1="244.78" y1="245.44" x2="248.1" y2="249.51"/>
          <line class="circle-6" x1="237.4" y1="250.36" x2="240.38" y2="254.68"/>
          <line class="circle-6" x1="229.65" y1="254.68" x2="232.28" y2="259.23"/>
          <line class="circle-6" x1="221.58" y1="258.39" x2="223.85" y2="263.13"/>
          <line class="circle-6" x1="213.25" y1="261.45" x2="215.14" y2="266.35"/>
          <line class="circle-6" x1="204.71" y1="263.85" x2="206.21" y2="268.88"/>
          <line class="circle-6" x1="196" y1="265.57" x2="197.1" y2="270.7"/>
          <line class="circle-6" x1="187.19" y1="266.6" x2="187.88" y2="271.81"/>
        </g>
        <image
       
        class="w-full h-full object-cover"  
        href="https://i.111666.best/image/4M0Yfr5bRWkkvjIgv8Dar4.jpeg" 
        width="100%" height="100%" 
        clip-path="url(#circleClip)"
        filter="url(#blurFilter)"/>
    </svg>
    <!-- <img 
    style="z-index:7;
    scale: 0.65;
    transform: rotateY(180deg);" 
    class="w-full h-full object-cover relative -top-40 left-0" 
    src="" 
    alt=""> -->
    <!-- <div style="z-index:8;position: absolute;top: 180px;left: 128px;background-color: aqua;width: 250px;height: 50px;">
     <span style="vertical-align: middle">空间站【黑塔】</span> 
    </div>   -->
  </button>
  </div> 

    <div style="width: 350px;height: 350px;position: absolute;top: 45px;left: 720px;rotate: -20deg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 349 306">
        <polyline class="circle-1" points="181.69 5.15 177.92 23.98 185.45 23.98 181.69 5.15"/>
        <polyline class="circle-1" points="30 151.73 48.83 155.5 48.83 147.97 30 151.73"/>
        <polyline class="circle-1" points="328 156.57 309.17 152.81 309.17 160.34 328 156.57"/>
        <polyline class="circle-1" points="174.97 301 178.73 282.17 171.2 282.17 174.97 301"/>
        <circle id="twocircle" class="circle-3" cx="178.46" cy="153.61" r="118.88"/>
        <g id="circle">
          <path class="circle-4" d="M104.77,45.49c54.87-30.12,102.74-30.66,155.99,6.45"/>
          <path class="circle-4" d="M284.97,78.84s52.71,69.93-2.15,150.08"/>
          <path class="circle-4" d="M99.93,257.97s62.4,51.64,152.23,4.3"/>
          <path class="circle-4" d="M74.65,76.69s-56.48,66.16-3.77,149.54"/>
        </g>
        <g id="leftop">
          <path class="circle-2" d="M64.69,31.78s-2.15-2.15-3.77-.54c-1.4,1.4,1.08,3.77,1.08,3.77l21.52,24.21s4.3,4.84,3.77,9.68-1.61,5.92-1.61,5.92h16.93l1.36-16.68s-4.84,1.61-9.14.54-19.36-16.68-19.36-16.68l-10.76-10.22Z"/>
          <path class="circle-5" d="M91.59,64.59s-2.15-2.69-1.61-3.23,3.5,1.61,3.5,1.61c0,0,1.34.54,2.42.54s3.23-.54,3.23-.54l-.54,7.53h-7.03s.58,0,.58-2.15-.54-3.77-.54-3.77Z"/>
          <circle class="circle-2" cx="55.82" cy="25.59" r="2.96"/>
        </g>
        <g id="rightop">
          <path class="circle-2" d="M300.85,38.75s2.15-2.15.54-3.77c-1.4-1.4-3.77,1.08-3.77,1.08l-24.21,21.52s-4.84,4.3-9.68,3.77-5.92-1.61-5.92-1.61v16.93l16.68,1.36s-1.61-4.84-.54-9.14,16.68-19.36,16.68-19.36l10.22-10.76Z"/>
          <path class="circle-5" d="M268.04,65.65s2.69-2.15,3.23-1.61-1.61,3.5-1.61,3.5c0,0-.54,1.34-.54,2.42s.54,3.23.54,3.23l-7.53-.54v-7.03s0,.58,2.15.58,3.77-.54,3.77-.54Z"/>
          <circle class="circle-2" cx="307.04" cy="29.88" r="2.96"/>
        </g>
        <g id="leftbottom">
          <path class="circle-2" d="M56.1,267.93s-2.15,2.15-.54,3.77c1.4,1.4,3.77-1.08,3.77-1.08l24.21-21.52s4.84-4.3,9.68-3.77,5.92,1.61,5.92,1.61v-16.93s-16.68-1.36-16.68-1.36c0,0,1.61,4.84.54,9.14s-16.68,19.36-16.68,19.36l-10.22,10.76Z"/>
          <path class="circle-5" d="M88.92,241.04s-2.69,2.15-3.23,1.61,1.61-3.5,1.61-3.5c0,0,.54-1.34.54-2.42s-.54-3.23-.54-3.23l7.53.54v7.03s0-.58-2.15-.58-3.77.54-3.77.54Z"/>
          <circle class="circle-2" cx="49.92" cy="276.81" r="2.96"/>
        </g>
        <g id="rightbottom">
          <path class="circle-2" d="M291.19,274.91s2.15,2.15,3.77.54c1.4-1.4-1.08-3.77-1.08-3.77l-21.52-24.21s-4.3-4.84-3.77-9.68,1.61-5.92,1.61-5.92h-16.93s-1.36,16.68-1.36,16.68c0,0,4.84-1.61,9.14-.54s19.36,16.68,19.36,16.68l10.76,10.22Z"/>
          <path class="circle-5" d="M264.29,242.1s2.15,2.69,1.61,3.23-3.5-1.61-3.5-1.61c0,0-1.34-.54-2.42-.54s-3.23.54-3.23.54l.54-7.53h7.03s-.58,0-.58,2.15.54,3.77.54,3.77Z"/>
          <circle class="circle-2" cx="300.06" cy="281.1" r="2.96"/>
        </g>
        <g id="neicircle">
          <ellipse class="circle-1" cx="180.34" cy="58.4" rx="2.96" ry="2.69"/>
          <ellipse class="circle-1" cx="176.04" cy="248.82" rx="2.96" ry="2.69"/>
          <ellipse class="circle-1" cx="273.67" cy="155.5" rx="2.69" ry="2.96"/>
          <ellipse class="circle-1" cx="83.25" cy="152.27" rx="2.69" ry="2.96"/>
        </g>
        <circle id="threecircle" class="circle-7" cx="178.46" cy="153.61" r="93.6"/>

        <g>
          <line class="circle-6" x1="178.32" y1="266.94" x2="178.6" y2="272.18"/>
          <line class="circle-6" x1="169.45" y1="266.58" x2="169.32" y2="271.83"/>
          <line class="circle-6" x1="160.64" y1="265.52" x2="160.1" y2="270.75"/>
          <line class="circle-6" x1="151.94" y1="263.78" x2="150.99" y2="268.95"/>
          <line class="circle-6" x1="143.4" y1="261.36" x2="142.05" y2="266.44"/>
          <line class="circle-6" x1="135.08" y1="258.28" x2="133.33" y2="263.24"/>
          <line class="circle-6" x1="127.02" y1="254.55" x2="124.89" y2="259.36"/>
          <line class="circle-6" x1="119.28" y1="250.21" x2="116.79" y2="254.83"/>
          <line class="circle-6" x1="111.91" y1="245.27" x2="109.06" y2="249.68"/>
          <line class="circle-6" x1="104.95" y1="239.77" x2="101.76" y2="243.94"/>
          <line class="circle-6" x1="98.44" y1="233.73" x2="94.93" y2="237.64"/>
          <line class="circle-6" x1="92.42" y1="227.21" x2="88.62" y2="230.83"/>
          <line class="circle-6" x1="86.94" y1="220.23" x2="82.86" y2="223.55"/>
          <line class="circle-6" x1="82.02" y1="212.85" x2="77.69" y2="215.83"/>
          <line class="circle-6" x1="77.69" y1="205.1" x2="73.15" y2="207.73"/>
          <line class="circle-6" x1="73.98" y1="197.03" x2="69.25" y2="199.3"/>
          <line class="circle-6" x1="70.92" y1="188.7" x2="66.02" y2="190.59"/>
          <line class="circle-6" x1="68.52" y1="180.16" x2="63.49" y2="181.66"/>
          <line class="circle-6" x1="66.8" y1="171.45" x2="61.67" y2="172.55"/>
          <line class="circle-6" x1="65.77" y1="162.64" x2="60.57" y2="163.33"/>
          <line class="circle-6" x1="65.44" y1="153.77" x2="60.19" y2="154.05"/>
          <line class="circle-6" x1="65.79" y1="144.9" x2="60.54" y2="144.77"/>
          <line class="circle-6" x1="66.85" y1="136.09" x2="61.62" y2="135.55"/>
          <line class="circle-6" x1="68.59" y1="127.39" x2="63.42" y2="126.44"/>
          <line class="circle-6" x1="71.01" y1="118.85" x2="65.93" y2="117.5"/>
          <line class="circle-6" x1="74.09" y1="110.53" x2="69.14" y2="108.78"/>
          <line class="circle-6" x1="77.82" y1="102.47" x2="73.02" y2="100.34"/>
          <line class="circle-6" x1="82.16" y1="94.73" x2="77.54" y2="92.23"/>
          <line class="circle-6" x1="87.1" y1="87.36" x2="82.69" y2="84.51"/>
          <line class="circle-6" x1="92.61" y1="80.4" x2="88.43" y2="77.21"/>
          <line class="circle-6" x1="98.64" y1="73.89" x2="94.73" y2="70.38"/>
          <line class="circle-6" x1="105.16" y1="67.87" x2="101.54" y2="64.07"/>
          <line class="circle-6" x1="112.14" y1="62.39" x2="108.83" y2="58.31"/>
          <line class="circle-6" x1="119.53" y1="57.47" x2="116.54" y2="53.14"/>
          <line class="circle-6" x1="127.28" y1="53.14" x2="124.64" y2="48.59"/>
          <line class="circle-6" x1="135.34" y1="49.43" x2="133.07" y2="44.7"/>
          <line class="circle-6" x1="143.67" y1="46.37" x2="141.78" y2="41.47"/>
          <line class="circle-6" x1="152.21" y1="43.97" x2="150.71" y2="38.94"/>
          <line class="circle-6" x1="160.92" y1="42.25" x2="159.82" y2="37.12"/>
          <line class="circle-6" x1="169.74" y1="41.22" x2="169.04" y2="36.01"/>
          <line class="circle-6" x1="178.6" y1="40.88" x2="178.32" y2="35.64"/>
          <line class="circle-6" x1="187.47" y1="41.24" x2="187.6" y2="35.99"/>
          <line class="circle-6" x1="196.28" y1="42.3" x2="196.82" y2="37.07"/>
          <line class="circle-6" x1="204.99" y1="44.04" x2="205.93" y2="38.87"/>
          <line class="circle-6" x1="213.52" y1="46.46" x2="214.88" y2="41.38"/>
          <line class="circle-6" x1="221.85" y1="49.54" x2="223.59" y2="44.59"/>
          <line class="circle-6" x1="229.9" y1="53.27" x2="232.03" y2="48.46"/>
          <line class="circle-6" x1="237.64" y1="57.61" x2="240.14" y2="52.99"/>
          <line class="circle-6" x1="245.01" y1="62.55" x2="247.87" y2="58.14"/>
          <line class="circle-6" x1="251.98" y1="68.06" x2="255.17" y2="63.88"/>
          <line class="circle-6" x1="258.48" y1="74.09" x2="261.99" y2="70.18"/>
          <line class="circle-6" x1="264.5" y1="80.61" x2="268.3" y2="76.99"/>
          <line class="circle-6" x1="269.99" y1="87.59" x2="274.06" y2="84.28"/>
          <line class="circle-6" x1="274.91" y1="94.98" x2="279.23" y2="91.99"/>
          <line class="circle-6" x1="279.23" y1="102.72" x2="283.78" y2="100.09"/>
          <line class="circle-6" x1="282.94" y1="110.79" x2="287.68" y2="108.52"/>
          <line class="circle-6" x1="286" y1="119.12" x2="290.9" y2="117.23"/>
          <line class="circle-6" x1="288.4" y1="127.66" x2="293.43" y2="126.16"/>
          <line class="circle-6" x1="290.12" y1="136.37" x2="295.26" y2="135.27"/>
          <line class="circle-6" x1="291.15" y1="145.18" x2="296.36" y2="144.49"/>
          <line class="circle-6" x1="291.49" y1="154.05" x2="296.73" y2="153.77"/>
          <line class="circle-6" x1="291.13" y1="162.92" x2="296.38" y2="163.05"/>
          <line class="circle-6" x1="290.08" y1="171.73" x2="295.3" y2="172.27"/>
          <line class="circle-6" x1="288.33" y1="180.43" x2="293.5" y2="181.38"/>
          <line class="circle-6" x1="285.91" y1="188.97" x2="290.99" y2="190.32"/>
          <line class="circle-6" x1="282.83" y1="197.3" x2="287.79" y2="199.04"/>
          <line class="circle-6" x1="279.11" y1="205.35" x2="283.91" y2="207.48"/>
          <line class="circle-6" x1="274.76" y1="213.09" x2="279.38" y2="215.59"/>
          <line class="circle-6" x1="269.82" y1="220.46" x2="274.23" y2="223.31"/>
          <line class="circle-6" x1="264.32" y1="227.42" x2="268.49" y2="230.61"/>
          <line class="circle-6" x1="258.28" y1="233.93" x2="262.19" y2="237.44"/>
          <line class="circle-6" x1="251.76" y1="239.95" x2="255.38" y2="243.75"/>
          <line class="circle-6" x1="244.78" y1="245.44" x2="248.1" y2="249.51"/>
          <line class="circle-6" x1="237.4" y1="250.36" x2="240.38" y2="254.68"/>
          <line class="circle-6" x1="229.65" y1="254.68" x2="232.28" y2="259.23"/>
          <line class="circle-6" x1="221.58" y1="258.39" x2="223.85" y2="263.13"/>
          <line class="circle-6" x1="213.25" y1="261.45" x2="215.14" y2="266.35"/>
          <line class="circle-6" x1="204.71" y1="263.85" x2="206.21" y2="268.88"/>
          <line class="circle-6" x1="196" y1="265.57" x2="197.1" y2="270.7"/>
          <line class="circle-6" x1="187.19" y1="266.6" x2="187.88" y2="271.81"/>
        </g>

      </svg>
    </div>


    <div style="width: 350px;height: 350px;position: absolute;top: 350px;left: 1070px;rotate: 20deg">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 349 306">
        <polyline class="circle-1" points="181.69 5.15 177.92 23.98 185.45 23.98 181.69 5.15"/>
        <polyline class="circle-1" points="30 151.73 48.83 155.5 48.83 147.97 30 151.73"/>
        <polyline class="circle-1" points="328 156.57 309.17 152.81 309.17 160.34 328 156.57"/>
        <polyline class="circle-1" points="174.97 301 178.73 282.17 171.2 282.17 174.97 301"/>
        <circle id="twocircle" class="circle-3" cx="178.46" cy="153.61" r="118.88"/>
        <g id="circle">
          <path class="circle-4" d="M104.77,45.49c54.87-30.12,102.74-30.66,155.99,6.45"/>
          <path class="circle-4" d="M284.97,78.84s52.71,69.93-2.15,150.08"/>
          <path class="circle-4" d="M99.93,257.97s62.4,51.64,152.23,4.3"/>
          <path class="circle-4" d="M74.65,76.69s-56.48,66.16-3.77,149.54"/>
        </g>
        <g id="leftop">
          <path class="circle-2" d="M64.69,31.78s-2.15-2.15-3.77-.54c-1.4,1.4,1.08,3.77,1.08,3.77l21.52,24.21s4.3,4.84,3.77,9.68-1.61,5.92-1.61,5.92h16.93l1.36-16.68s-4.84,1.61-9.14.54-19.36-16.68-19.36-16.68l-10.76-10.22Z"/>
          <path class="circle-5" d="M91.59,64.59s-2.15-2.69-1.61-3.23,3.5,1.61,3.5,1.61c0,0,1.34.54,2.42.54s3.23-.54,3.23-.54l-.54,7.53h-7.03s.58,0,.58-2.15-.54-3.77-.54-3.77Z"/>
          <circle class="circle-2" cx="55.82" cy="25.59" r="2.96"/>
        </g>
        <g id="rightop">
          <path class="circle-2" d="M300.85,38.75s2.15-2.15.54-3.77c-1.4-1.4-3.77,1.08-3.77,1.08l-24.21,21.52s-4.84,4.3-9.68,3.77-5.92-1.61-5.92-1.61v16.93l16.68,1.36s-1.61-4.84-.54-9.14,16.68-19.36,16.68-19.36l10.22-10.76Z"/>
          <path class="circle-5" d="M268.04,65.65s2.69-2.15,3.23-1.61-1.61,3.5-1.61,3.5c0,0-.54,1.34-.54,2.42s.54,3.23.54,3.23l-7.53-.54v-7.03s0,.58,2.15.58,3.77-.54,3.77-.54Z"/>
          <circle class="circle-2" cx="307.04" cy="29.88" r="2.96"/>
        </g>
        <g id="leftbottom">
          <path class="circle-2" d="M56.1,267.93s-2.15,2.15-.54,3.77c1.4,1.4,3.77-1.08,3.77-1.08l24.21-21.52s4.84-4.3,9.68-3.77,5.92,1.61,5.92,1.61v-16.93s-16.68-1.36-16.68-1.36c0,0,1.61,4.84.54,9.14s-16.68,19.36-16.68,19.36l-10.22,10.76Z"/>
          <path class="circle-5" d="M88.92,241.04s-2.69,2.15-3.23,1.61,1.61-3.5,1.61-3.5c0,0,.54-1.34.54-2.42s-.54-3.23-.54-3.23l7.53.54v7.03s0-.58-2.15-.58-3.77.54-3.77.54Z"/>
          <circle class="circle-2" cx="49.92" cy="276.81" r="2.96"/>
        </g>
        <g id="rightbottom">
          <path class="circle-2" d="M291.19,274.91s2.15,2.15,3.77.54c1.4-1.4-1.08-3.77-1.08-3.77l-21.52-24.21s-4.3-4.84-3.77-9.68,1.61-5.92,1.61-5.92h-16.93s-1.36,16.68-1.36,16.68c0,0,4.84-1.61,9.14-.54s19.36,16.68,19.36,16.68l10.76,10.22Z"/>
          <path class="circle-5" d="M264.29,242.1s2.15,2.69,1.61,3.23-3.5-1.61-3.5-1.61c0,0-1.34-.54-2.42-.54s-3.23.54-3.23.54l.54-7.53h7.03s-.58,0-.58,2.15.54,3.77.54,3.77Z"/>
          <circle class="circle-2" cx="300.06" cy="281.1" r="2.96"/>
        </g>
        <g id="neicircle">
          <ellipse class="circle-1" cx="180.34" cy="58.4" rx="2.96" ry="2.69"/>
          <ellipse class="circle-1" cx="176.04" cy="248.82" rx="2.96" ry="2.69"/>
          <ellipse class="circle-1" cx="273.67" cy="155.5" rx="2.69" ry="2.96"/>
          <ellipse class="circle-1" cx="83.25" cy="152.27" rx="2.69" ry="2.96"/>
        </g>
        <circle id="threecircle" class="circle-7" cx="178.46" cy="153.61" r="93.6"/>
        <g>
          <line class="circle-6" x1="178.32" y1="266.94" x2="178.6" y2="272.18"/>
          <line class="circle-6" x1="169.45" y1="266.58" x2="169.32" y2="271.83"/>
          <line class="circle-6" x1="160.64" y1="265.52" x2="160.1" y2="270.75"/>
          <line class="circle-6" x1="151.94" y1="263.78" x2="150.99" y2="268.95"/>
          <line class="circle-6" x1="143.4" y1="261.36" x2="142.05" y2="266.44"/>
          <line class="circle-6" x1="135.08" y1="258.28" x2="133.33" y2="263.24"/>
          <line class="circle-6" x1="127.02" y1="254.55" x2="124.89" y2="259.36"/>
          <line class="circle-6" x1="119.28" y1="250.21" x2="116.79" y2="254.83"/>
          <line class="circle-6" x1="111.91" y1="245.27" x2="109.06" y2="249.68"/>
          <line class="circle-6" x1="104.95" y1="239.77" x2="101.76" y2="243.94"/>
          <line class="circle-6" x1="98.44" y1="233.73" x2="94.93" y2="237.64"/>
          <line class="circle-6" x1="92.42" y1="227.21" x2="88.62" y2="230.83"/>
          <line class="circle-6" x1="86.94" y1="220.23" x2="82.86" y2="223.55"/>
          <line class="circle-6" x1="82.02" y1="212.85" x2="77.69" y2="215.83"/>
          <line class="circle-6" x1="77.69" y1="205.1" x2="73.15" y2="207.73"/>
          <line class="circle-6" x1="73.98" y1="197.03" x2="69.25" y2="199.3"/>
          <line class="circle-6" x1="70.92" y1="188.7" x2="66.02" y2="190.59"/>
          <line class="circle-6" x1="68.52" y1="180.16" x2="63.49" y2="181.66"/>
          <line class="circle-6" x1="66.8" y1="171.45" x2="61.67" y2="172.55"/>
          <line class="circle-6" x1="65.77" y1="162.64" x2="60.57" y2="163.33"/>
          <line class="circle-6" x1="65.44" y1="153.77" x2="60.19" y2="154.05"/>
          <line class="circle-6" x1="65.79" y1="144.9" x2="60.54" y2="144.77"/>
          <line class="circle-6" x1="66.85" y1="136.09" x2="61.62" y2="135.55"/>
          <line class="circle-6" x1="68.59" y1="127.39" x2="63.42" y2="126.44"/>
          <line class="circle-6" x1="71.01" y1="118.85" x2="65.93" y2="117.5"/>
          <line class="circle-6" x1="74.09" y1="110.53" x2="69.14" y2="108.78"/>
          <line class="circle-6" x1="77.82" y1="102.47" x2="73.02" y2="100.34"/>
          <line class="circle-6" x1="82.16" y1="94.73" x2="77.54" y2="92.23"/>
          <line class="circle-6" x1="87.1" y1="87.36" x2="82.69" y2="84.51"/>
          <line class="circle-6" x1="92.61" y1="80.4" x2="88.43" y2="77.21"/>
          <line class="circle-6" x1="98.64" y1="73.89" x2="94.73" y2="70.38"/>
          <line class="circle-6" x1="105.16" y1="67.87" x2="101.54" y2="64.07"/>
          <line class="circle-6" x1="112.14" y1="62.39" x2="108.83" y2="58.31"/>
          <line class="circle-6" x1="119.53" y1="57.47" x2="116.54" y2="53.14"/>
          <line class="circle-6" x1="127.28" y1="53.14" x2="124.64" y2="48.59"/>
          <line class="circle-6" x1="135.34" y1="49.43" x2="133.07" y2="44.7"/>
          <line class="circle-6" x1="143.67" y1="46.37" x2="141.78" y2="41.47"/>
          <line class="circle-6" x1="152.21" y1="43.97" x2="150.71" y2="38.94"/>
          <line class="circle-6" x1="160.92" y1="42.25" x2="159.82" y2="37.12"/>
          <line class="circle-6" x1="169.74" y1="41.22" x2="169.04" y2="36.01"/>
          <line class="circle-6" x1="178.6" y1="40.88" x2="178.32" y2="35.64"/>
          <line class="circle-6" x1="187.47" y1="41.24" x2="187.6" y2="35.99"/>
          <line class="circle-6" x1="196.28" y1="42.3" x2="196.82" y2="37.07"/>
          <line class="circle-6" x1="204.99" y1="44.04" x2="205.93" y2="38.87"/>
          <line class="circle-6" x1="213.52" y1="46.46" x2="214.88" y2="41.38"/>
          <line class="circle-6" x1="221.85" y1="49.54" x2="223.59" y2="44.59"/>
          <line class="circle-6" x1="229.9" y1="53.27" x2="232.03" y2="48.46"/>
          <line class="circle-6" x1="237.64" y1="57.61" x2="240.14" y2="52.99"/>
          <line class="circle-6" x1="245.01" y1="62.55" x2="247.87" y2="58.14"/>
          <line class="circle-6" x1="251.98" y1="68.06" x2="255.17" y2="63.88"/>
          <line class="circle-6" x1="258.48" y1="74.09" x2="261.99" y2="70.18"/>
          <line class="circle-6" x1="264.5" y1="80.61" x2="268.3" y2="76.99"/>
          <line class="circle-6" x1="269.99" y1="87.59" x2="274.06" y2="84.28"/>
          <line class="circle-6" x1="274.91" y1="94.98" x2="279.23" y2="91.99"/>
          <line class="circle-6" x1="279.23" y1="102.72" x2="283.78" y2="100.09"/>
          <line class="circle-6" x1="282.94" y1="110.79" x2="287.68" y2="108.52"/>
          <line class="circle-6" x1="286" y1="119.12" x2="290.9" y2="117.23"/>
          <line class="circle-6" x1="288.4" y1="127.66" x2="293.43" y2="126.16"/>
          <line class="circle-6" x1="290.12" y1="136.37" x2="295.26" y2="135.27"/>
          <line class="circle-6" x1="291.15" y1="145.18" x2="296.36" y2="144.49"/>
          <line class="circle-6" x1="291.49" y1="154.05" x2="296.73" y2="153.77"/>
          <line class="circle-6" x1="291.13" y1="162.92" x2="296.38" y2="163.05"/>
          <line class="circle-6" x1="290.08" y1="171.73" x2="295.3" y2="172.27"/>
          <line class="circle-6" x1="288.33" y1="180.43" x2="293.5" y2="181.38"/>
          <line class="circle-6" x1="285.91" y1="188.97" x2="290.99" y2="190.32"/>
          <line class="circle-6" x1="282.83" y1="197.3" x2="287.79" y2="199.04"/>
          <line class="circle-6" x1="279.11" y1="205.35" x2="283.91" y2="207.48"/>
          <line class="circle-6" x1="274.76" y1="213.09" x2="279.38" y2="215.59"/>
          <line class="circle-6" x1="269.82" y1="220.46" x2="274.23" y2="223.31"/>
          <line class="circle-6" x1="264.32" y1="227.42" x2="268.49" y2="230.61"/>
          <line class="circle-6" x1="258.28" y1="233.93" x2="262.19" y2="237.44"/>
          <line class="circle-6" x1="251.76" y1="239.95" x2="255.38" y2="243.75"/>
          <line class="circle-6" x1="244.78" y1="245.44" x2="248.1" y2="249.51"/>
          <line class="circle-6" x1="237.4" y1="250.36" x2="240.38" y2="254.68"/>
          <line class="circle-6" x1="229.65" y1="254.68" x2="232.28" y2="259.23"/>
          <line class="circle-6" x1="221.58" y1="258.39" x2="223.85" y2="263.13"/>
          <line class="circle-6" x1="213.25" y1="261.45" x2="215.14" y2="266.35"/>
          <line class="circle-6" x1="204.71" y1="263.85" x2="206.21" y2="268.88"/>
          <line class="circle-6" x1="196" y1="265.57" x2="197.1" y2="270.7"/>
          <line class="circle-6" x1="187.19" y1="266.6" x2="187.88" y2="271.81"/>
        </g>

      </svg>
    </div>
    
  </div>
</template>


<style>
body{
  font-family: 'Uranus_Pixel_11Px', 'Uranus Pixel 11Px';

}
 .circle-1 {
  stroke-width: 0px;
}

.circle-1, .circle-2 {
  fill: #212121;
  mix-blend-mode:multiply;
}

.circle-2, .circle-3, .circle-4, .circle-5, .circle-6, .circle-7 {
  stroke: #282828;
  stroke-miterlimit: 10;
}

.circle-2, .circle-5 {
  stroke-width: .54px;
}

.circle-3 {
  stroke-width: 3.23px;
}

.circle-3, .circle-4, .circle-6 {
  fill: none;
}

.circle-4 {
  stroke-width: 5.48px;
}

.circle-5, .circle-7 {
  fill: #fff;
}

.circle-6 {
  stroke-width: 1.61px;
}

.circle-7 {
  stroke-width: 2.69px;
}
.starilbg{
  z-index: -1;
  width: 100%;
  height: 100%;
  /* background: url(https://i.111666.best/image/vTbJIoRxYJuZAVEQ4MgZJe.jpeg); */
  --c: rgb(24, 151, 214);
  background: repeating-linear-gradient(45deg,var(--c),#8887872c,var(--c) 0.5%),
              repeating-linear-gradient(-30deg,var(--c), #000, var(--c) 0.5%),
              linear-gradient(180deg,#060606db,var(--c));
  background-blend-mode: color-dodge;
  filter: contrast(1.5);
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border: 10px solid black;
  border-radius: 15px;
  overflow: auto;
}
</style>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
export default {
  name:"staril",
  setup() {

  onMounted(() => {
    gsap.set("#circleherta",{
      rotate:0,
      autoAlpha:0.8,
    })
    gsap.set("#herta",{
      scale:1
    })
    gsap.to("#circleherta",{
      duration:5,
      rotate:360,
      autoAlpha:1,
      repeat:-1,
      yoyo:1,
    })
    gsap.to("#herta",{
      duration:0.5,
      scale:1.1,
      repeat:-1,
      yoyo:1,
    })



  })
  
  }
  
  }
</script>