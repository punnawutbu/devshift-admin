import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './components/login-page/login-page.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'devshift-admin';
}
