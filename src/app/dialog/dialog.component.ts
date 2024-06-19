import { Component, ElementRef, ViewEncapsulation, viewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class DialogComponent {
  private dialog = viewChild<ElementRef<HTMLDialogElement>>('dialog');
  handlerClick(){
    this.dialog()?.nativeElement.showModal();
  }
}
