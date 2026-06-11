import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-app',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {}
