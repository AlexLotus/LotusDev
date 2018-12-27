import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-code-copy',
  template: `
    <div class="snippet">
      <button class="copy fa fa-clone" (click)="copyCode()"></button>{{isCopied}}
      <p *ngFor='let myCode of code.split("/n")'>{{myCode}}</p>
    </div>
  `,
  styles: ['p { padding: 0px; margin: 0px; color: greenyellow; font-weight: 500;}',
          '.snippet {width: 600px; background-color: slategray; padding: 15px; border-radius: 15px; margin: 15px auto;}',
    '.copy {color: white; background: none; border: none;}',
    '.copy:hover {color: darkslategrey;}',
    '.copy:active {color: lightgray;}'
          ]
})
export class CopyComponent {
  @Input() code: string;
  isCopied: string = '';
  newCode: string[];
  copied: string;

  copyCode() {
    this.isCopied = 'Code Copied - not yet implemented';
    this.newCode = this.code.split("/n")
    this.copied = this.newCode.join(" ");
    document.execCommand('copy');
  }
}
