(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e3ac1a1"],{"024c":function(t,e,s){"use strict";var n=s("9ab4"),a=s("2b0e"),i=s("2fe1");let o=class extends a["default"]{get pane(){return this.$store.state.panes.panes[this.paneId]}mounted(){this.$el.id=this.paneId,this.refreshZoom(),this.$nextTick(()=>{const t=this.$el.clientWidth;"function"===typeof this.onResize&&this.onResize(t,this.$el.clientHeight,!0)}),this.$el.addEventListener("mousedown",this.focusPane)}beforeDestroy(){this.$el.removeEventListener("mousedown",this.focusPane),this._onStoreMutation&&this._onStoreMutation()}refreshZoom(){this.$store.dispatch("panes/refreshZoom",this.paneId)}focusPane(){this.$store.commit("app/SET_FOCUSED_PANE",this.paneId)}};o=Object(n["a"])([Object(i["b"])({props:{paneId:{required:!0,type:String}}})],o),e["a"]=o},2755:function(t,e,s){},"8c91":function(t,e,s){"use strict";var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"pane-header hide-scrollbar pane-overlay d-flex",class:{"-loading":t.loading}},[e("div",{staticClass:"pane-header__loader"}),e("span",{staticClass:"pane-header__name ml4 mrauto",attrs:{"data-hide-header":""},on:{dblclick:t.renamePane}},[t._v(t._s(t.name))]),e("div",{staticClass:"toolbar flex-grow-1",on:{dblclick:t.maximizePane}},[t._t("default"),e("button",{staticClass:"toolbar__label min-768",attrs:{type:"button"},on:{click:t.openSearch}},[e("i",{staticClass:"icon-search"})]),t.settings?e("button",{staticClass:"toolbar__label min-768",attrs:{type:"button"},on:{click:t.openSettings}},[e("i",{staticClass:"icon-cog"})]):t._e(),e("button",{staticClass:"toolbar__label",attrs:{type:"button"},on:{click:t.toggleDropdown}},[e("i",{staticClass:"icon-more"})]),e("dropdown",{model:{value:t.paneDropdownTrigger,callback:function(e){t.paneDropdownTrigger=e},expression:"paneDropdownTrigger"}},[e("div",{staticClass:"d-flex btn-group"},[e("button",{staticClass:"btn -green",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.changeZoom(e,-1)}}},[e("i",{staticClass:"icon-minus"})]),e("button",{staticClass:"btn -green text-monospace flex-grow-1 text-center",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.resetZoom.apply(null,arguments)}}},[t._v(" × "+t._s(t.zoom.toFixed(2))+" ")]),e("button",{staticClass:"btn -green",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.changeZoom(e,1)}}},[e("i",{staticClass:"icon-plus"})])]),t._t("menu"),null!==t.settings?e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.openSettings}},[e("i",{staticClass:"icon-cog"}),e("span",[t._v("Settings")])]):t._e(),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(e){return t.$store.dispatch("app/showSearch",t.paneId)}}},[e("i",{staticClass:"icon-search"}),e("span",[t._v("Sources")])]),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.maximizePane}},[e("i",{staticClass:"icon-enlarge"}),e("span",[t._v("Maximize")])]),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.duplicatePane}},[e("i",{staticClass:"icon-copy-paste"}),e("span",[t._v("Duplicate")])]),e("div",{staticClass:"dropdown--divider"}),e("button",{staticClass:"dropdown-item",attrs:{type:"button"},on:{click:t.removePane}},[e("i",{staticClass:"icon-trash"}),e("span",[t._v("Remove")])])],2)],2)])},a=[],i=s("9ab4"),o=s("2b0e"),r=s("2fe1"),c=s("28f3"),l=s("0c01");let u=class extends o["default"]{constructor(){super(...arguments),this.paneDropdownTrigger=null}get zoom(){return this.$store.state.panes.panes[this.paneId].zoom||1}get type(){return this.$store.state.panes.panes[this.paneId].type}get name(){const t=this.$store.state.panes.panes[this.paneId].name,e=this.$store.state.panes.marketsListeners[this.$store.state.panes.panes[this.paneId].markets[0]];return t||(e?e.local:this.type)}openSearch(){this.$store.dispatch("app/showSearch",this.paneId)}changeZoom(t,e){const s=this.zoom+(t.shiftKey?.0625:.125)*e;this.$store.dispatch("panes/setZoom",{id:this.paneId,zoom:s}),this.$emit("zoom",s)}resetZoom(){this.$store.dispatch("panes/setZoom",{id:this.paneId,zoom:1}),this.$emit("zoom",1)}async removePane(){await l["a"].confirm(`Delete pane "${this.paneId}" ?`)&&this.$store.dispatch("panes/removePane",this.paneId)}duplicatePane(){this.$store.dispatch("panes/duplicatePane",this.paneId)}highlightPane(t){this.$el.parentElement.parentElement.classList[t?"add":"remove"]("-highlight")}maximizePane(t){if("dblclick"===t.type&&t.currentTarget!==t.target&&"toolbar__spacer"!==t.target.className)return;const e=this.$el.parentElement.parentElement,s=e.classList.toggle("-maximized"),n=Object(c["o"])(e);for(const i of n)i.getAttribute("type")&&(i.classList.remove("-maximized"),i.style.display=s?"none":"block");const a=Event;window.dispatchEvent(new a("resize"))}async renamePane(){const t=await l["a"].prompt({action:"Rename",input:this.name});t!==this.name&&this.$store.commit("panes/SET_PANE_NAME",{id:this.paneId,name:t})}toggleDropdown(t){this.paneDropdownTrigger?this.paneDropdownTrigger=null:this.paneDropdownTrigger=t.currentTarget}async openSettings(){this.settings&&l["a"].open((await this.settings()).default,{paneId:this.paneId})}};u=Object(i["a"])([Object(r["b"])({name:"PaneHeader",props:{paneId:{type:String},settings:{type:Function,default:null},loading:{type:Boolean,default:!1}}})],u);var h=u,p=h,d=s("2877"),m=Object(d["a"])(p,n,a,!1,null,null,null);e["a"]=m.exports},9700:function(t,e,s){"use strict";s("2755")},cd00:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"pane-counters"},[e("pane-header",{attrs:{paneId:t.paneId,settings:()=>s.e("chunk-6edad2a6").then(s.bind(null,"47ad"))}}),e("div",{staticClass:"counters hide-scrollbar"},t._l(t.activeSteps,(function(s,n){return e("div",{key:n,staticClass:"counter",attrs:{duration:s.duration}},[e("div",{staticClass:"counter__side -buy",style:{width:s.buy/(s.buy+s.sell)*100+"%"}},[t.countersCount?e("span",[t._v(t._s(s.buy))]):e("span",[t._v(t._s(t.formatAmount(s.buy)))])]),e("div",{staticClass:"counter__side -sell",style:{width:s.sell/(s.buy+s.sell)*100+"%"}},[t.countersCount?e("span",[t._v(t._s(s.sell))]):e("span",[t._v(t._s(t.formatAmount(s.sell)))])])])})),0)],1)},a=[],i=s("9ab4"),o=s("60a3"),r=s("28f3"),c=s("06c2"),l=s("a914"),u=s("024c"),h=s("8c91");let p=class extends(Object(o["b"])(u["a"])){constructor(){super(...arguments),this.steps=[],this._feed=null}get liquidationsOnly(){return this.$store.state[this.paneId].liquidationsOnly}get countersSteps(){return this.$store.state[this.paneId].steps}get countersCount(){return this.$store.state[this.paneId].count}get countersGranularity(){return this.$store.state[this.paneId].granularity}get activeSteps(){return this.steps.filter(t=>t.hasData)}created(){this._onStoreMutation=this.$store.subscribe(t=>{switch(t.type){case"panes/SET_PANE_MARKETS":t.payload.id===this.paneId&&this.createCounters();break;case this.paneId+"/REPLACE_COUNTERS":case this.paneId+"/TOGGLE_LIQUIDATIONS_ONLY":case this.paneId+"/TOGGLE_COUNT":this.createCounters();break}}),this.createCounters(),this._populateCountersInterval=setInterval(this.populateCounters.bind(this),this.countersGranularity)}beforeDestroy(){this._feed&&l["a"].off(this._feed,this.onVolume),clearInterval(this._populateCountersInterval)}onVolume(t){const e={buy:t.vbuy,sell:t.vsell};if(this.liquidationsOnly?(e.buy=t.lbuy,e.sell=t.lsell):this.countersCount&&(e.buy=t.cbuy,e.sell=t.csell),e.buy||e.sell){this._activeChunk.timestamp||(this._activeChunk.timestamp=t.timestamp),this._activeChunk.buy+=e.buy,this._activeChunk.sell+=e.sell;for(let t=0;t<this.steps.length;t++)this.steps[t].buy+=e.buy,this.steps[t].sell+=e.sell}}clearCounters(){this._feed&&l["a"].off(this._feed,this.onVolume),this._counters?(this._counters.splice(0,this._counters.length),this._activeChunk.timestamp=null,this._activeChunk.buy=this._activeChunk.sell=0,this.steps.splice(0,this.steps.length)):(this._counters=[],this._activeChunk={timestamp:null,buy:0,sell:0},this.steps=[])}createCounters(){this.clearCounters();for(const t of this.countersSteps)this._counters.push({duration:t,chunks:[]});for(const t of this._counters){const e=0===this._counters.indexOf(t);this.steps.push({duration:Object(r["n"])(t.duration),buy:0,sell:0,hasData:e})}this._feed="bucket-"+Object(r["k"])(this.pane.markets),this._feed.length&&l["a"].on(this._feed,this.onVolume)}populateCounters(){const t=Date.now();this._activeChunk.timestamp&&(this._counters[0].chunks.push({timestamp:this._activeChunk.timestamp,buy:this._activeChunk.buy,sell:this._activeChunk.sell}),this._activeChunk.timestamp=null,this._activeChunk.buy=0,this._activeChunk.sell=0);let e,s,n=[];for(let a=0;a<this._counters.length;a++){n.length&&(Array.prototype.push.apply(this._counters[a].chunks,n.splice(0,n.length)),this.steps[a].hasData||(this.steps[a].hasData=!0)),e=0,s=0;let i=0;for(let n=0;n<this._counters[a].chunks.length;n++)if(e+=this._counters[a].chunks[n].buy,s+=this._counters[a].chunks[n].sell,this._counters[a].chunks[n].timestamp>=t-this._counters[a].duration){i=n;break}i&&(n=this._counters[a].chunks.splice(0,i+1),this.steps[a].buy-=e,this.steps[a].sell-=s)}}formatAmount(t){return Object(c["c"])(t)}};p=Object(i["a"])([Object(o["a"])({components:{PaneHeader:h["a"]},name:"Counters"})],p);var d=p,m=d,b=(s("9700"),s("2877")),_=Object(b["a"])(m,n,a,!1,null,null,null);e["default"]=_.exports}}]);