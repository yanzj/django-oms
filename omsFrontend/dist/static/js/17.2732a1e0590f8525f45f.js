webpackJsonp([17],{"4UWC":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".head-lavel{padding-bottom:50px}.table-button{float:left}.table-search{float:right}.table-pagination{padding:10px 0;float:right}",""])},"9Pcv":function(t,e,a){var n=a("4UWC");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("a6e17f16",n,!0)},rySo:function(t,e,a){"use strict";function n(t){a("9Pcv")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("ZTLr"),s=a("QmSG"),o=a("zsKB"),c=a("4lE6"),l={components:{addGroup:o.default,editGroup:c.default},data:function(){return{tableData:[],tabletotal:0,searchdata:"",currentPage:1,limit:s.LIMIT,offset:"",pagesize:[10,25,50,100],addForm:!1,editForm:!1,rowdata:{}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this,e={limit:this.limit,offset:this.offset,name__contains:this.searchdata};Object(i.e)(e).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count})},addGroupSubmit:function(t){var e=this;Object(i.j)(t).then(function(t){e.$message({message:"恭喜你，添加成功",type:"success"}),e.fetchData(),e.addForm=!1}).catch(function(t){e.$message.error("添加失败"),console.log(t)})},editGroupSubmit:function(t){var e=this;Object(i.l)(this.rowdata.id,t).then(function(t){e.$message({message:"恭喜你，更新成功",type:"success"}),e.fetchData(),e.editForm=!1}).catch(function(t){e.$message.error("更新失败"),console.log(t)})},deleteGroup:function(t){var e=this;Object(i.b)(t).then(function(t){e.$message({message:"恭喜你，删除成功",type:"success"}),e.fetchData()}).catch(function(t){e.$message.error("删除失败"),console.log(t)})},closeEditForm:function(){this.fetchData()},handleEdit:function(t){this.editForm=!0,this.rowdata=t},searchClick:function(){this.fetchData()},handleSizeChange:function(t){this.limit=t,this.fetchData()},handleCurrentChange:function(t){this.offset=(t-1)*s.LIMIT,this.fetchData()}}},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(e){t.addForm=!0}}},[t._v("新建")])],1),t._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"搜索 ..."},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.searchdata,callback:function(e){t.searchdata=e},expression:"searchdata"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:t.searchClick},slot:"suffix"})])],1)]),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"名称",sortable:"custom"}}),t._v(" "),a("el-table-column",{attrs:{prop:"desc",label:"描述"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){t.handleEdit(e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.deleteGroup(e.row.id)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.limit,layout:"prev, pager, next, sizes",total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)]),t._v(" "),a("el-dialog",{attrs:{visible:t.addForm},on:{"update:visible":function(e){t.addForm=e}}},[a("add-group",{on:{formdata:t.addGroupSubmit}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.editForm},on:{"update:visible":function(e){t.editForm=e},close:t.closeEditForm}},[a("edit-group",{attrs:{rowdata:t.rowdata},on:{formdata:t.editGroupSubmit}})],1)],1)},u=[],d={render:r,staticRenderFns:u},f=d,h=a("VU/8"),p=n,m=h(l,f,!1,p,null,null);e.default=m.exports}});