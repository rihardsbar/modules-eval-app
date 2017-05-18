import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';

import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';

import { MicroServices } from '../../providers/microservices';
import {User, State, Action} from "../../providers//model";
import {Store} from "../../providers/store";
// import { CKEditorModule } from '../../ng2-ckeditor/src/index';

/*
  Generated class for the ModuleDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-module-notes',
  templateUrl: 'module-notes.html',

})
export class ModuleNotesPage {
  item: any;
  notes: any;
  favourited: boolean;

  constructor(
    private store: Store<State, Action>,
    public navCtrl: NavController,
    public navParams: NavParams,
    public microServices: MicroServices,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
    ){
      //set init values
    	this.item = store.state.current_module.module;
      this.notes = this.item.NOTES ? this.item.NOTES : " "
      this.favourited = store.state.current_module.favourited
     //subscribe to changes
      this.store.stateGlobal.subscribe(pair => {
         this.item = pair.state.current_module.module;
         this.notes = this.item.NOTES ? this.item.NOTES : " "
         this.favourited = pair.state.current_module.favourited
        })
      
    }

  updateNotes(){
    this.microServices.notes(this.item, this.favourited, this.notes).then((result)=>{
        this.navCtrl.pop()
      },(err)=>{
        this.presentToast(err.json()['message']);
      });
  }
  
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.present();
  }
}
// CKEditorModule.editorConfig = function( config ) {
// 	config.toolbarGroups = [
// 		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
// 		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
// 		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
// 		{ name: 'forms', groups: [ 'forms' ] },
// 		'/',
// 		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
// 		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
// 		{ name: 'links', groups: [ 'links' ] },
// 		{ name: 'insert', groups: [ 'insert' ] },
// 		'/',
// 		{ name: 'styles', groups: [ 'styles' ] },
// 		{ name: 'colors', groups: [ 'colors' ] },
// 		{ name: 'tools', groups: [ 'tools' ] },
// 		{ name: 'about', groups: [ 'about' ] },
// 		{ name: 'others', groups: [ 'others' ] }
// 	];

// 	config.removeButtons = 'Cut,Copy,Redo,Undo,Paste,PasteText,PasteFromWord,About,Flash,HorizontalRule,Anchor,Outdent,Indent,Blockquote,CreateDiv,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,Language,BidiRtl,BidiLtr,Link,Unlink,Scayt,SelectAll,Source,Save,NewPage,Preview,Print,Templates,Replace,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,BulletedList,PageBreak,Iframe';
// };
