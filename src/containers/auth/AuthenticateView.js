import React, {Component} from 'react';
import {StyleSheet, WebView, Platform} from 'react-native';
import {AppSizes, AppStyles} from '@theme/';
import {setCustomSourceTransformer} from 'react-native/Libraries/Image/resolveAssetSource';

setCustomSourceTransformer((resolver) => {
  if (Platform.OS === 'android'
    && !resolver.serverUrl
    && !resolver.bundlePath
    && resolver.asset.type === 'html') {
    resolver.bundlePath = '/android_asset/';
  }

  return resolver.defaultAsset();
});

const HTML = `
  <style>
  
svg#logo {
  width: 1200px;
  overflow: visible;
  margin: 0 auto;
  padding: 10px;
}

.node rect {
  stroke: #333;
  fill: #fff;
}

g.node rect {
  stroke: #bdc3c7;
  stroke-width: 2px;
  cursor: pointer;
}

g.node rect.inner {
  fill: white;
}

g.node rect.outer {
  position: absolute;
  display: none;
  stroke-dasharray: 4px;
  stroke-opacity: 0.5;
  fill: transparent;
}

g.selected rect.outer {
  display: inline;
}

rect.selection {
  stroke: gray;
  stroke-dasharray: 4px;
  stroke-opacity: 0.5;
  fill: transparent;
}

.edgePath path {
  stroke: gray;
  fill: gray;
  stroke-width: 2px;
}

.node text {
  pointer-events: none;
}

/* disable text selection */
svg *::selection {
  background: transparent;
}

svg *::-moz-selection {
  background: transparent;
}

svg *::-webkit-selection {
  background: transparent;
}

g.has-point.node rect {
  fill: #ffdc00 !important;
  stroke: #387ef5;
}

.splash-img svg {
  /* Set rules to fill background */
  min-height: 100%;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

.splash-img,
#obturateur1 {
  stroke-width: 4;
  stroke-miterlimit: 10;
  color: #3D489E;
}

svg#splash * {
  fill: none;
  stroke: currentColor;
}

svg,
div.scroll {
  height: 100%;
  width: auto;
}
  </style>
  <svg  version="1.1" id="logo"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="1200" height="620"  viewBox="0 0 1200 620" style="enable-background:new 0 0 1200 620;" xml:space="preserve">
    <g>
      <g class="output">
        <g class="clusters"></g>
        <g class="edgePaths">
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M220,37.5L188.33333333333331,45.416666666666664C156.66666666666666,53.33333333333333,93.33333333333333,69.16666666666666,61.666666666666664,81.25C30,93.33333333333333,30,101.66666666666666,30,105.83333333333333L30,110"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead50)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead50" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M30,170L30,174.16666666666666C30,178.33333333333331,30,186.66666666666666,30,195C30,203.33333333333331,30,211.66666666666666,30,215.83333333333331L30,220"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead51)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead51" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M60,155L73.33333333333333,161.66666666666666C86.66666666666666,168.33333333333331,113.33333333333333,181.66666666666666,126.66666666666666,192.5C140,203.33333333333331,140,211.66666666666666,140,215.83333333333331L140,220"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead52)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead52" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M170,280L174.16666666666666,284.16666666666663C178.33333333333331,288.3333333333333,186.66666666666666,296.66666666666663,190.83333333333334,305C195,313.3333333333333,195,321.66666666666663,195,325.8333333333333L195,330"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead53)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead53" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M250,60L249.99999999999997,64.16666666666667C250,68.33333333333333,250,76.66666666666666,249.99999999999997,84.99999999999999C250,93.33333333333333,250,101.66666666666666,249.99999999999997,105.83333333333333L250,110"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead54)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead54" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M250,170L249.99999999999997,174.16666666666666C250,178.33333333333331,250,186.66666666666666,249.99999999999997,195C250,203.33333333333331,250,211.66666666666666,249.99999999999997,215.83333333333331L250,220"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead55)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead55" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M280,45L293.3333333333333,51.666666666666664C306.66666666666663,58.33333333333333,333.3333333333333,71.66666666666666,346.6666666666667,82.49999999999999C360,93.33333333333333,360,101.66666666666666,360,105.83333333333333L360,110"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead56)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead56" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M360,170L360,174.16666666666666C360,178.33333333333331,360,186.66666666666666,360,195C360,203.33333333333331,360,211.66666666666666,360,215.83333333333331L360,220"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead57)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead57" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M360,280L360,284.16666666666663C360,288.3333333333333,360,296.66666666666663,360,305C360,313.3333333333333,360,321.66666666666663,360,325.8333333333333L360,330"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead58)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead58" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M280,34.285714285714285L339.16666666666663,42.738095238095234C398.3333333333333,51.19047619047619,516.6666666666666,68.09523809523809,575.8333333333334,80.71428571428571C635,93.33333333333333,635,101.66666666666666,635,105.83333333333333L635,110"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead59)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead59" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M635,170L635,174.16666666666666C635,178.33333333333331,635,186.66666666666666,635,195C635,203.33333333333331,635,211.66666666666666,635,215.83333333333331L635,220"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead60)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead60" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M885,165.3846153846154L890.8333333333333,170.32051282051282C896.6666666666666,175.25641025641025,908.3333333333333,185.12820512820514,914.1666666666665,194.23076923076923C919.9999999999999,203.33333333333331,919.9999999999999,211.66666666666666,919.9999999999998,215.83333333333331L920,220"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead61)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead61" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M665,275.38461538461536L670.8333333333333,280.32051282051276C676.6666666666666,285.2564102564102,688.3333333333333,295.1282051282051,698.3333333333334,304.23076923076917C708.3333333333333,313.3333333333333,716.6666666666666,321.66666666666663,720.8333333333334,325.8333333333333L725,330"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead62)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead62" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M890,263.75L874.9999999999998,270.62499999999994C859.9999999999999,277.5,829.9999999999999,291.25,811.5909090909089,302.29166666666663C793.181818181818,313.3333333333333,786.3636363636363,321.66666666666663,782.9545454545454,325.8333333333333L779.5454545454545,330"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead63)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead63" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M785,390L789.1666666666665,394.16666666666663C793.3333333333333,398.3333333333333,801.6666666666666,406.66666666666663,805.8333333333333,414.99999999999994C810,423.33333333333326,810,431.66666666666663,810,435.8333333333333L810,440"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead64)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead64" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M390,365.59322033898303L434.16666666666663,373.8276836158192C478.3333333333333,382.06214689265533,566.6666666666666,398.53107344632764,614.2424242424242,410.9322033898305C661.8181818181818,423.33333333333326,668.6363636363636,431.66666666666663,672.0454545454546,435.8333333333333L675.4545454545455,440"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead65)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead65" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M749.5454545454545,390L748.7878787878786,394.16666666666663C748.030303030303,398.3333333333333,746.5151515151515,406.66666666666663,742.3484848484848,414.99999999999994C738.1818181818181,423.33333333333326,731.3636363636363,431.66666666666663,727.9545454545454,435.8333333333333L724.5454545454545,440"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead66)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead66" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M990,147.5L958.3333333333333,155.41666666666666C926.6666666666666,163.33333333333331,863.3333333333333,179.16666666666666,831.6666666666665,191.25C799.9999999999999,203.33333333333331,799.9999999999999,211.66666666666666,799.9999999999998,215.83333333333331L800,220"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead67)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead67" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M770,256L729.1666666666665,264.16666666666663C688.3333333333333,272.3333333333333,606.6666666666666,288.66666666666663,565.8333333333333,301C525,313.3333333333333,525,321.66666666666663,525,325.8333333333333L525,330"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead68)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead68" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M1025.4545454545455,170L1026.2121212121212,174.16666666666666C1026.969696969697,178.33333333333331,1028.4848484848485,186.66666666666666,1029.2424242424242,195C1030,203.33333333333331,1030,211.66666666666666,1030,215.83333333333331L1030,220"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead69)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead69" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M810.9090909090909,280L812.4242424242423,284.16666666666663C813.9393939393938,288.3333333333333,816.9696969696969,296.66666666666663,846.8181818181818,308.625C876.6666666666666,320.5833333333333,933.3333333333333,336.16666666666663,961.6666666666666,343.9583333333333L990,351.75"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead70)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead70" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M1030,280L1030,284.16666666666663C1030,288.3333333333333,1030,296.66666666666663,1029.2424242424242,305C1028.4848484848485,313.3333333333333,1026.969696969697,321.66666666666663,1026.2121212121212,325.8333333333333L1025.4545454545455,330"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead71)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead71" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M1020,390L1020,394.16666666666663C1020,398.3333333333333,1020,406.66666666666663,1020,414.99999999999994C1020,423.33333333333326,1020,431.66666666666663,1020,435.8333333333333L1020,440"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead72)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead72" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M555,265L568.3333333333334,271.66666666666663C581.6666666666666,278.3333333333333,608.3333333333333,291.66666666666663,621.6666666666666,302.5C635,313.3333333333333,635,321.66666666666663,635,325.8333333333333L635,330"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead73)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead73" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M122.27272727272728,280L119.81060606060606,284.16666666666663C117.34848484848484,288.3333333333333,112.42424242424241,296.66666666666663,109.96212121212119,310C107.49999999999999,323.3333333333333,107.49999999999999,341.66666666666663,107.49999999999997,360C107.49999999999999,378.3333333333333,107.49999999999999,396.66666666666663,129.58333333333331,413.30769230769226C151.66666666666666,429.9487179487179,195.83333333333331,444.89743589743586,217.91666666666666,452.3717948717948L240,459.84615384615387"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead74)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead74" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M195,390L195,394.16666666666663C195,398.3333333333333,195,406.66666666666663,202.5,416.33333333333326C210,425.99999999999994,225,436.99999999999994,232.5,442.4999999999999L240,448"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead75)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead75" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M330,390L325.8333333333333,394.16666666666663C321.66666666666663,398.3333333333333,313.3333333333333,406.66666666666663,306.5151515151515,414.99999999999994C299.69696969696963,423.33333333333326,294.3939393939394,431.66666666666663,291.7424242424242,435.8333333333333L289.09090909090907,440"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead76)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead76" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M725,364.7142857142857L671.6666666666666,373.0952380952381C618.3333333333333,381.4761904761905,511.66666666666663,398.2380952380952,440.8333333333333,413.7486772486772C370,429.25925925925924,335,443.5185185185185,317.5,450.64814814814815L300,457.77777777777777"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead77)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead77" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M990,362.7731092436975L895.8333333333334,371.47759103641454C801.6666666666666,380.18207282913164,613.3333333333333,397.5910364145658,498.3333333333333,413.68799132556245C383.3333333333333,429.7849462365591,341.66666666666663,444.5698924731183,320.8333333333333,451.9623655913978L300,459.35483870967744"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead78)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead78" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
          <g class="edgePath" style="opacity: 1;">
            <path class="path"
                  d="M635,390L635,394.16666666666663C635,398.3333333333333,635,406.66666666666663,579.1666666666666,419.2465753424657C523.3333333333333,431.8264840182648,411.66666666666663,448.65296803652967,355.8333333333333,457.06621004566205L300,465.47945205479454"
                  marker-end="url(http://sherlock.phodal.com/#arrowhead79)" style="fill: none;"></path>
            <defs>
              <marker id="arrowhead79" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8"
                      markerHeight="6" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" style="stroke-width: 1; stroke-dasharray: 1, 0;"></path>
              </marker>
            </defs>
          </g>
        </g>
        <g class="edgeLabels">
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
          <g class="edgeLabel" transform="" style="opacity: 1;">
            <g transform="translate(0,0)" class="label">
              <text>
                <tspan xml:space="preserve" dy="1em" x="1"></tspan>
              </text>
            </g>
          </g>
        </g>
        <g class="nodes">
          <g class="node" id="1" transform="translate(250,30)"
             ng-class="{ 'can-add-points': canAddPoints(1), 'has-point': hasPoint(1) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-15.71875,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">HTML</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="2" transform="translate(30,140)"
             ng-class="{ 'can-add-points': canAddPoints(2), 'has-point': hasPoint(2) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-11.78125,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">CSS</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="3" transform="translate(30,250)"
             ng-class="{ 'can-add-points': canAddPoints(3), 'has-point': hasPoint(3) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-25.4453125,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">CSS 工具</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="4" transform="translate(140,250)"
             ng-class="{ 'can-add-points': canAddPoints(4), 'has-point': hasPoint(4) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-35.890625,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">精通Web设计</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="5" transform="translate(195,360)"
             ng-class="{ 'can-add-points': canAddPoints(5), 'has-point': hasPoint(5) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-28.7265625,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">jQuery效果</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="6" transform="translate(250,140)"
             ng-class="{ 'can-add-points': canAddPoints(6), 'has-point': hasPoint(6) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-38,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">搜索引擎优化</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="7" transform="translate(250,250)"
             ng-class="{ 'can-add-points': canAddPoints(7), 'has-point': hasPoint(7) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-38,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">搜索引擎营销</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="8" transform="translate(360,140)"
             ng-class="{ 'can-add-points': canAddPoints(8), 'has-point': hasPoint(8) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-26.21875,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">Javascript</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="9" transform="translate(360,250)"
             ng-class="{ 'can-add-points': canAddPoints(9), 'has-point': hasPoint(9) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-30.7734375,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">JS库和框架</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="10" transform="translate(360,360)"
             ng-class="{ 'can-add-points': canAddPoints(10) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-36,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">精通前端开发</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="11" transform="translate(635,140)"
             ng-class="{ 'can-add-points': canAddPoints(11) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-30,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">服务端编程</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="12" transform="translate(635,250)"
             ng-class="{ 'can-add-points': canAddPoints(12) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-30,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">服务端框架</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="13" transform="translate(855,140)"
             ng-class="{ 'can-add-points': canAddPoints(13) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-38,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">数据库管理</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="14" transform="translate(920,250)"
             ng-class="{ 'can-add-points': canAddPoints(14) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-42,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">高级数据库管理</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="15" transform="translate(755,360)"
             ng-class="{ 'can-add-points': canAddPoints(15) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-42,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">精通服务端开发</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="16" transform="translate(810,470)"
             ng-class="{ 'can-add-points': canAddPoints(16) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-42,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">用户授权和认证</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="17" transform="translate(700,470)"
             ng-class="{ 'can-add-points': canAddPoints(17) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-32.8125,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">AJAX &amp; APIs</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="18" transform="translate(1020,140)"
             ng-class="{ 'can-add-points': canAddPoints(18) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-24,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">用户探索</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="19" transform="translate(800,250)"
             ng-class="{ 'can-add-points': canAddPoints(19) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-24,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">平面设计</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="20" transform="translate(525,360)"
             ng-class="{ 'can-add-points': canAddPoints(20) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-36,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">平面设计工具</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="21" transform="translate(1030,250)"
             ng-class="{ 'can-add-points': canAddPoints(21) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-12,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">原型</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="22" transform="translate(1020,360)"
             ng-class="{ 'can-add-points': canAddPoints(22) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-48,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">精通用户体验设计</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="23" transform="translate(1020,470)"
             ng-class="{ 'can-add-points': canAddPoints(23) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-24,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">用户测试</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="24" transform="translate(525,250)"
             ng-class="{ 'can-add-points': canAddPoints(24) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-30,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">服务器管理</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="25" transform="translate(635,360)"
             ng-class="{ 'can-add-points': canAddPoints(25) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-12,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">部署</tspan>
                </text>
              </g>
            </g>
          </g>
          <g class="node" id="26" transform="translate(270,470)"
             ng-class="{ 'can-add-points': canAddPoints(26) }"
             style="opacity: 1;">
            <rect rx="10" ry="10" x="-30" y="-30" width="60" height="60" class="inner"
                  ng-click='openSkill($event)' style="fill: rgb(236, 240, 241);"></rect>
            <g class="label" transform="translate(0,0)">
              <g transform="translate(-35.890625,-7)">
                <text>
                  <tspan xml:space="preserve" dy="1em" x="1">精通Web开发</tspan>
                </text>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
  `;


const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent',
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.85,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
});

class Authenticate extends Component {
  static componentName = 'Authenticate';

  handleMessage = (evt: any) => {
    const message = evt.nativeEvent.data;
    this.webview.postMessage(message);
    this.message = message;
    this.popupDialog.show();
  };

  render = () => (
    <WebView
      ref={(webview) => {
        this.webview = webview;
      }}
      scalesPageToFit
      startInLoadingState
      onMessage={this.handleMessage}
      source={{html: HTML, baseUrl: 'web/'}}
      automaticallyAdjustContentInsets={false}
      style={[AppStyles.container, styles.container]}
      onNavigationStateChange={this.onNavigationStateChange}
      cacheEnabled
    />
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
