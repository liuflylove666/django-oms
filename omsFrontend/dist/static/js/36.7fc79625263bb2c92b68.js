webpackJsonp([36],{"4jhf":function(e,t,o){var r=o("IM/t");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);o("rjj0")("14f40aec",r,!0)},"IM/t":function(e,t,o){t=e.exports=o("FZ+f")(!1),t.push([e.i,".table-expand{font-size:0}.table-expand .el-form-item{margin:0;width:100%}.table-expand .el-form-item .el-form-item__label{width:90px;color:#99a9bf}.table-expand .el-form-item .el-form-item__content{width:80%}",""])},cjR3:function(e,t,o){"use strict";function r(e){o("4jhf")}Object.defineProperty(t,"__esModule",{value:!0});var l=o("iVC1"),s=o("8TIX"),a={components:{sesectHosts:s.default},data:function(){return{ruleForm:{name:"",code_repo:"svn",deploy_cmd:"",code_url:"",showdev:!1,deploy_hosts:[],deploy_path:"",desc:""},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],deploy_cmd:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],code_url:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],deploy_path:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},addenvForm:!1,envForm:{job:"",name:"",hosts:[],path:"",desc:""},actionTab:"",tabIndex:-1,TabValues:[]}},created:function(){},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(l.j)(t.ruleForm).then(function(e){"Created"===e.statusText&&t.$message({type:"success",message:"恭喜你，新建成功"}),t.$router.push("/jobs/jobs")})})},resetForm:function(e){this.$refs[e].resetFields()},addTab:function(){this.addenvForm=!1;var e=++this.tabIndex+"";this.TabValues.push({title:this.envForm.name,name:e,content:this.envForm}),this.actionTab=e,this.envForm={}},removeTab:function(e){var t=this.TabValues,o=this.actionTab;o===e&&t.forEach(function(r,l){if(r.name===e){var s=t[l+1]||t[l-1];s&&(o=s.name)}}),this.actionTab=o,this.TabValues=t.filter(function(t){return t.name!==e})},getHosts:function(e){this.ruleForm.deploy_hosts=e}}},n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[o("el-card",{staticStyle:{"max-width":"800px"}},[o("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"名称",prop:"name"}},[o("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"代码地址",prop:"code_url"}},[o("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.ruleForm.code_url,callback:function(t){e.$set(e.ruleForm,"code_url",t)},expression:"ruleForm.code_url"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"发布路径",prop:"deploy_path"}},[o("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.ruleForm.deploy_path,callback:function(t){e.$set(e.ruleForm,"deploy_path",t)},expression:"ruleForm.deploy_path"}}),e._v(" "),o("i",{staticClass:"el-icon-question"},[e._v(" deploy_path")])],1),e._v(" "),o("el-form-item",{attrs:{label:"发布主机",prop:"deploy_hosts"}},[o("sesect-hosts",{attrs:{selecthost:e.envForm.hosts},on:{gethosts:e.getHosts}})],1),e._v(" "),o("el-form-item",{attrs:{label:"发布命令",prop:"deploy_cmd"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.deploy_cmd,callback:function(t){e.$set(e.ruleForm,"deploy_cmd",t)},expression:"ruleForm.deploy_cmd"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"研发可见",prop:"showdev"}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.showdev,callback:function(t){e.$set(e.ruleForm,"showdev",t)},expression:"ruleForm.showdev"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"描述",prop:"desc"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1),e._v(" "),o("el-dialog",{attrs:{visible:e.addenvForm},on:{"update:visible":function(t){e.addenvForm=t}}},[o("el-form",{ref:"envForm",attrs:{"label-width":"70px"},model:{value:e.envForm,callback:function(t){e.envForm=t},expression:"envForm"}},[o("el-form-item",{attrs:{label:"名称",prop:"name"}},[o("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.envForm.name,callback:function(t){e.$set(e.envForm,"name",t)},expression:"envForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"发布路径",prop:"path"}},[o("el-input",{attrs:{placeholder:"请输入正确的内容"},model:{value:e.envForm.path,callback:function(t){e.$set(e.envForm,"path",t)},expression:"envForm.path"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"选择主机",prop:"hosts"}},[o("sesect-hosts",{attrs:{selecthost:e.envForm.hosts},on:{gethosts:e.getHosts}})],1),e._v(" "),o("el-form-item",{attrs:{label:"描述",prop:"desc"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.envForm.desc,callback:function(t){e.$set(e.envForm,"desc",t)},expression:"envForm.desc"}})],1)],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.addTab}},[e._v("确 定")])],1)],1)],1)},i=[],m={render:n,staticRenderFns:i},c=m,u=o("VU/8"),d=r,p=u(a,c,!1,d,null,null);t.default=p.exports}});