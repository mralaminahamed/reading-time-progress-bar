var __webpack_exports__={};class ReadingProgressBar{constructor(t,e,n){this.pluginSettings=JSON.parse(t.dataset.settings)||{},this.widget=t,this.content=e,this.comments=n,this.screenHeight=0,this.elementOffset=0,this.scrollPosition=0,this.checkProgress=this.checkProgress.bind(this),window.addEventListener("load",this.checkProgress),window.addEventListener("resize",this.checkProgress),window.addEventListener("scroll",this.checkProgress)}getElementOffset(){const t=this.content.getBoundingClientRect().bottom;if("true"===this.pluginSettings.include_comments&&this.comments){const e=this.comments.getBoundingClientRect().top;return t+(this.comments.getBoundingClientRect().bottom-e)}return t}getScreenHeight(){const t=document.documentElement.clientHeight;return Math.max(t,window.innerHeight)}getScrollPosition(){const t=document.documentElement.scrollTop;if("true"===this.pluginSettings.include_comments&&this.comments){const e=this.content.getBoundingClientRect().bottom,n=this.comments.getBoundingClientRect().top;if(e<=0&&n-e!=0)return n>0?t-n:t-(n-t)}return t}checkProgress(){const t=this.pluginSettings,e=this.widget.querySelector(".progress-bar"),n=parseInt(t.progress_bar_content_offset);this.elementOffset=this.getElementOffset(),this.screenHeight=this.getScreenHeight();const s=this.getScrollPosition()>n?this.getScrollPosition()-n:0,o=this.elementOffset-this.screenHeight,i=100*o/(s+o),c=Math.abs(i-100);e.style.width=c>=100?"100%":c+"%"}}if(document.querySelector(".coca-rtpb-plugin.reading-progress-bar")){const t=document.querySelector(".wp-block-post-content"),e=document.querySelector(".entry-content"),n=document.querySelector("#coca_rtpb_plugin_content"),s=document.querySelector(".wp-block-post-comments"),o=document.querySelector(".wp-block-comments"),i=document.querySelector("#coca_rtpb_plugin_comments");new ReadingProgressBar(document.querySelector(".coca-rtpb-plugin.reading-progress-bar"),t||e||n,s||o||i)}