import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('blueprintCreated') bpCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';


  constructor() { }

  ngOnInit() {
    console.log('At ngOnInit()');
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: nameInput.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bpCreated.emit({serverName: this.newServerName, serverContent: nameInput.value});
  }
}