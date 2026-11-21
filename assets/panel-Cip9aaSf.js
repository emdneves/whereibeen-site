import{g as e,h as t,i as n,l as r,n as i,r as a}from"./themes-2MY2WNIr.js";var o=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},s=class extends o{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function c(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}var l={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:c,toHexString:c},u={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},d=[l,u,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=u.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^(n*r|0);return u.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=u.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^(n*r|0);return u.toHexString(i)}}];function f(e){return d.find(t=>t.match(e))}var p=class extends o{constructor(e,t,n,r){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=f(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=c(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},m=class extends o{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},h=class extends o{constructor(e,t,n,r,i,a){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},g=class extends o{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},_=class extends o{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},v=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function y(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var b=!1,x=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent?(this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement)):(this.domElement.classList.add(`lil-root`),s&&this.domElement.classList.add(`lil-allow-touch-styles`),!b&&o&&(y(v),b=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a)}add(e,t,n,r,i){if(Object(n)===n)return new g(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new h(this,e,t,n,r,i);case`boolean`:return new s(this,e,t);case`string`:return new _(this,e,t);case`function`:return new m(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new p(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof m||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof m)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}},S={"map.source":{options:[`50m`,`110m`]},"map.worldview":{options:[`un`,`defacto`]},"controls.style":{options:[`earth`,`classic`]},"controls.inertia":{min:0,max:2,step:.05},"controls.autoSpin":{min:0,max:.3,step:.005},"controls.deadZone":{min:0,max:1,step:.02},"controls.steerSpeed":{min:0,max:3,step:.05},"controls.brakeTime":{min:.01,max:1,step:.01},"controls.dragSpeed":{min:.001,max:.02,step:5e-4},"controls.zoomSpeed":{min:5e-4,max:.01,step:5e-4},"controls.resumeAfterDrag":{min:0,max:15,step:.5},"controls.resumeAfterLeave":{min:0,max:15,step:.5},"controls.minDistance":{min:1.05,max:3,step:.05},"controls.maxDistance":{min:2,max:10,step:.1},"routes.opacity":{min:0,max:1,step:.05},"routes.width":{min:.5,max:8,step:.25},"routes.dash":{min:.002,max:.1,step:.002},"routes.gap":{min:0,max:.1,step:.002},"routes.dashSpeed":{min:0,max:.2,step:.005},"routes.height":{min:0,max:.6,step:.01},"routes.planeScale":{min:.2,max:4,step:.05},"routes.planeSpeed":{min:.02,max:1.5,step:.01},"routes.planePause":{min:0,max:10,step:.5},"routes.shortHaulKm":{min:500,max:8e3,step:100},"routes.longHaulKm":{min:2e3,max:15e3,step:100},"boats.count":{min:0,max:120,step:1},"boats.speed":{min:0,max:.08,step:.001},"boats.scale":{min:.2,max:10,step:.1},"boats.wake":{min:0,max:1,step:.05},"air.balloons":{min:0,max:60,step:1},"air.airships":{min:0,max:20,step:1},"air.speed":{min:0,max:.1,step:.002},"air.scale":{min:.2,max:4,step:.05},"launches.interval":{min:10,max:900,step:10},"launches.duration":{min:10,max:180,step:5},"launches.scale":{min:.2,max:4,step:.05},"launches.issScale":{min:.2,max:4,step:.05},"launches.issOrbit":{min:30,max:1800,step:10},"ui.glassOpacity":{min:0,max:1,step:.02},"ui.blur":{min:0,max:80,step:1},"ui.saturation":{min:1,max:3,step:.05},"ui.edge":{min:0,max:1,step:.05},"ui.centerShift":{min:0,max:1,step:.05},"landmarks.style":{options:[`models`,`mixed`,`icons`,`blocks`]},"landmarks.minArea":{min:0,max:2e6,step:1e4},"landmarks.perLandmark":{min:0,max:3e6,step:5e4},"landmarks.scale":{min:.2,max:4,step:.05},"landmarks.areaFactor":{min:0,max:1,step:.05},"landmarks.spacing":{min:.2,max:2,step:.05},"landmarks.crowding":{min:0,max:1,step:.05},"landmarks.maxSize":{min:.01,max:.2,step:.005},"landmarks.glow":{min:0,max:1.5,step:.05},"landmarks.iconScale":{min:.3,max:3,step:.05},"landmarks.lean":{min:0,max:80,step:1},"landmarks.grow":{min:0,max:1,step:.05},"aurora.intensity":{min:0,max:4,step:.05},"aurora.altitude":{min:0,max:.06,step:.001},"aurora.height":{min:.005,max:.1,step:.001},"aurora.speed":{min:0,max:5,step:.1},"meteors.interval":{min:2,max:300,step:1},"meteors.brightness":{min:0,max:2,step:.05},"meteors.length":{min:.05,max:1,step:.01},"meteors.width":{min:.2,max:4,step:.1},"countries.visitedFill":{min:0,max:1,step:.05},"countries.visitedOutline":{min:0,max:1,step:.05},"countries.hoverFill":{min:0,max:1,step:.05},"countries.hoverOutline":{min:0,max:1,step:.05},"map.earth":{options:[`lowpoly`,`textured`,`imagery`]},"imagery.textureSize":{options:[1024,2048,4096]},"imagery.saturation":{min:0,max:2,step:.05},"imagery.contrast":{min:.5,max:2,step:.02},"imagery.brightness":{min:.3,max:2,step:.02},"imagery.oceanTint":{min:0,max:1,step:.05},"imagery.oceanGloss":{min:.05,max:1,step:.05},"imagery.bump":{min:0,max:5,step:.1},"night.lights":{min:0,max:4,step:.05},"night.twilight":{min:0,max:.2,step:.005},"render.toneMapping":{options:[`none`,`aces`,`agx`,`neutral`]},"render.exposure":{min:.2,max:3,step:.05},"atmosphere.haloPower":{min:1,max:20,step:.25},"atmosphere.rim":{min:0,max:4,step:.05},"atmosphere.rimPower":{min:.5,max:10,step:.25},"atmosphere.sunlit":{min:0,max:1,step:.05},"map.detail":{min:4,max:96,step:1},"map.textureSize":{options:[256,512,1024,2048,4096]},"map.landLift":{min:0,max:.03,step:.001},"map.biomeNoise":{min:0,max:10,step:.5},"map.coastWidth":{min:0,max:3,step:.1},"map.seaIceLat":{min:55,max:90,step:1},"map.seaIceNoise":{min:0,max:15,step:.5},"map.borderOpacity":{min:0,max:1,step:.05},"geometry.detail":{min:.2,max:3,step:.05},"material.kind":{options:[`toon`,`lambert`,`standard`,`unlit`]},"material.toonSteps":{min:2,max:8,step:1},"material.roughness":{min:0,max:1,step:.05},"render.pixelScale":{min:1,max:8,step:1},"render.textureFilter":{options:[`nearest`,`linear`]},"ascii.cell":{min:2,max:32,step:.25},"ascii.land":{min:0,max:1,step:.01},"ascii.ocean":{min:0,max:1,step:.01},"ascii.borders":{min:0,max:1,step:.01},"ascii.borderGap":{min:0,max:1,step:.01},"ascii.borderWidth":{min:.5,max:8,step:.25},"ascii.borderLineWidth":{min:.2,max:3,step:.05},"ascii.relief":{min:0,max:1,step:.01},"ascii.rim":{min:0,max:2,step:.05},"ascii.contrast":{min:.3,max:3,step:.05},"ascii.gamma":{min:.3,max:3,step:.05},"ascii.shimmer":{min:0,max:.4,step:.01},"ascii.speed":{min:0,max:30,step:1},"ascii.colorMuted":{min:0,max:1,step:.01},"ascii.colorDim":{min:.2,max:1,step:.01},"ascii.colorVivid":{min:.5,max:2.5,step:.05},"ascii.dotSize":{min:.2,max:1.5,step:.05},"ascii.jitter":{min:0,max:1,step:.05},"ascii.mouseRadius":{min:0,max:300,step:5},"ascii.mouseForce":{min:0,max:3,step:.05},"ascii.hoverJump":{min:0,max:3,step:.05},"ascii.routeHeight":{min:0,max:.6,step:.01},"ascii.routeSpacing":{min:.005,max:.1,step:.001},"ascii.routeLum":{min:0,max:1,step:.01},"ascii.routeLineWidth":{min:.2,max:3,step:.05},"ascii.ballLum":{min:0,max:1,step:.01},"ascii.ballSpeed":{min:.05,max:4,step:.05},"ascii.ballTail":{min:.01,max:1,step:.01},"ascii.ballPause":{min:0,max:5,step:.1},"ascii.lightAzimuth":{min:-90,max:90,step:1},"ascii.lightElevation":{min:-60,max:80,step:1},"ascii.ambient":{min:0,max:1,step:.01},"pixel.palette":{options:[`gba`,`auto`]},"pixel.colors":{min:4,max:64,step:1},"pixel.saturation":{min:0,max:3,step:.05},"pixel.contrast":{min:.5,max:2,step:.02},"pixel.brightness":{min:-.3,max:.3,step:.01},"pixel.dither":{min:0,max:1,step:.05},"pixel.shadeSteps":{min:2,max:6,step:1},"pixel.oceanMix":{min:0,max:1,step:.05},"pixel.lightAzimuth":{min:-90,max:90,step:1},"pixel.lightElevation":{min:-60,max:80,step:1},"pixel.lightIntensity":{min:0,max:6,step:.05},"pixel.ambient":{min:0,max:3,step:.05},"crystal.detail":{min:8,max:80,step:1},"crystal.jitter":{min:0,max:.48,step:.01},"crystal.coastDetail":{min:0,max:4,step:1},"crystal.saturation":{min:0,max:4,step:.05},"crystal.brightness":{min:.3,max:2,step:.02},"crystal.variation":{min:0,max:.4,step:.01},"crystal.gloss":{min:0,max:3,step:.05},"crystal.roughness":{min:.05,max:1,step:.01},"crystal.edges":{min:0,max:1,step:.01},"crystal.rim":{min:0,max:2,step:.05},"crystal.lightAzimuth":{min:-90,max:90,step:1},"crystal.lightElevation":{min:-60,max:80,step:1},"crystal.lightIntensity":{min:0,max:6,step:.05},"crystal.ambient":{min:0,max:3,step:.05},"crystal.visitedMix":{min:0,max:1,step:.01},"crystal.visitedLift":{min:0,max:.03,step:.001},"crystal.cloudDetail":{min:6,max:60,step:1},"crystal.cloudCoverage":{min:0,max:1,step:.01},"crystal.cloudOpacity":{min:0,max:1,step:.01},"crystal.cloudAltitude":{min:.002,max:.08,step:.001},"crystal.cloudSpeed":{min:0,max:.03,step:.001},"lighting.nightFill":{min:0,max:1,step:.02},"lighting.sun":{options:[`realtime`,`fixed`]},"lighting.sunLon":{min:-180,max:180,step:1},"lighting.sunLat":{min:-23.5,max:23.5,step:.5},"lighting.sunIntensity":{min:0,max:5,step:.05},"lighting.ambient":{min:0,max:3,step:.05},"lighting.daylight":{min:0,max:2,step:.05},"lighting.terminator":{min:.02,max:.4,step:.01},"palette.jitter":{min:0,max:.15,step:.005},"clouds.kind":{options:[`image`,`layer`,`puffs`]},"clouds.coverage":{min:0,max:1,step:.01},"clouds.scale":{min:.5,max:8,step:.1},"clouds.warp":{min:0,max:3,step:.05},"clouds.stretch":{min:1,max:4,step:.1},"clouds.sharpness":{min:0,max:1,step:.05},"clouds.bands":{min:0,max:2,step:.05},"clouds.textureSize":{options:[256,512,1024,2048]},"clouds.count":{min:0,max:80,step:1},"clouds.altitude":{min:1,max:1.25,step:.005},"clouds.size":{min:.02,max:.3,step:.005},"clouds.puffs":{min:1,max:24,step:1},"clouds.flatness":{min:0,max:1,step:.05},"clouds.opacity":{min:0,max:1,step:.05},"clouds.softness":{min:0,max:1,step:.05},"clouds.speed":{min:0,max:.2,step:.005},"atmosphere.intensity":{min:0,max:3,step:.05},"atmosphere.size":{min:1.01,max:1.4,step:.01},"sky.stars":{min:0,max:2e4,step:100},"sky.starSize":{min:.5,max:5,step:.1},"scenery.trees":{min:0,max:2e4,step:100},"scenery.treeScale":{min:.2,max:3,step:.05}},C=[`controls`,`ui`,`render`,`geometry`,`material`,`map`,`lighting`,`palette`];function w(o,s){let c=new x({title:`whereibeen · dev`,width:300}),l=new Set([...C,...s.layers.flatMap(e=>e.deps.map(e=>e.split(`.`)[0]))]),u={theme:s.id};c.add(u,`theme`,Object.fromEntries(n().map(e=>[a(e),e]))).name(`theme`).onChange(e=>i(e));let d=r(),f={preset:o.name,compareWith:d.find(e=>e!==o.name&&e!==`base`)??o.name,saveName:o.name,flip(){let e=o.name;o.select(f.compareWith),f.compareWith=e,f.preset=o.name,f.saveName=o.name,c.controllersRecursive().forEach(e=>e.updateDisplay())},reset:()=>o.reset(),async copy(){let e=JSON.stringify(o.toDef(f.saveName),null,2);await navigator.clipboard?.writeText(e).catch(()=>{}),console.log(e),T(`copied preset JSON (also in console)`)},async save(){let e=f.saveName.trim().toLowerCase().replace(/[^a-z0-9-]+/g,`-`);if(!e||e===`base`)return T(`pick a name other than "base"`);let t=o.toDef(e);o.markSaved(e);let n=await fetch(`/__dev/presets`,{method:`POST`,body:JSON.stringify({name:e,preset:t,dir:s.presetDir})});T(n.ok?`saved ${s.presetDir}/${e}.json`:`save failed: ${await n.text()}`)}};c.add(f,`preset`,d).name(`preset (A)`).onChange(e=>{o.select(e),f.saveName=e,c.controllersRecursive().forEach(e=>e.updateDisplay())}),c.add(f,`compareWith`,d).name(`compare (B)`),c.add(f,`flip`).name(`⇄ flip A / B   [B]`);let p=c.addFolder(`save`);p.add(f,`saveName`).name(`name`),p.add(f,`save`).name(`💾 save preset file`),p.add(f,`copy`).name(`copy JSON`),p.add(f,`reset`).name(`↺ discard tweaks`);let m=[],h={},g=[],_=()=>{m.forEach(e=>e.destroy()),m=[],g.length=0,h=structuredClone(o.current);for(let[t,n]of Object.entries(h)){if(!e(n)||!l.has(t))continue;let r=c.addFolder(t);r.close(),m.push(r),v(r,n,t)}y()},v=(t,n,r)=>{for(let[i,a]of Object.entries(n)){let s=`${r}.${i}`;if(e(a)){v(t.addFolder(i).close(),a,s);continue}let c=S[s],l;l=c&&`options`in c?t.add(n,i,c.options):typeof a==`string`&&a.startsWith(`#`)?t.addColor(n,i):typeof a==`number`&&c&&`min`in c?t.add(n,i,c.min,c.max,c.step):t.add(n,i),l.onFinishChange(e=>o.set(s,e)),g.push([l,s])}},y=()=>{let e=o.pristine();for(let[n,r]of g){let i=t(o.current,r);n.getValue()!==i&&(n.object[n.property]=i,n.updateDisplay());let a=JSON.stringify(t(e,r))!==JSON.stringify(t(o.current,r));n.domElement.classList.toggle(`pp-edited`,a)}},b=o.name,w={};return o.subscribe(()=>{o.name===b?y():(w=Object.fromEntries(m.map(e=>[e._title,!e._closed])),b=o.name,f.preset=f.saveName=o.name,c.controllersRecursive().forEach(e=>e.updateDisplay()),_(),m.forEach(e=>w[e._title]&&e.open()))}),window.addEventListener(`keydown`,e=>{e.target instanceof HTMLInputElement||e.metaKey||e.ctrlKey||((e.key===`b`||e.key===`B`)&&f.flip(),(e.key===`h`||e.key===`H`)&&c.show(c._hidden))}),_(),c}function T(e){let t=document.getElementById(`status`);t.textContent=e,t.classList.add(`show`),setTimeout(()=>t.classList.remove(`show`),2200)}export{w as mountPanel};