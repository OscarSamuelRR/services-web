import { Component, input, output, signal } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'pdf-viewer',
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './pdf-viewer.html',
})
export class PdfViewer {
  src = input.required<string>();
  title = input.required<string>();
  onBack = output<void>();
  showBack = input<boolean>(true)
  isLoading = signal<boolean>(true);

  goBack() {
    this.onBack.emit();
  }
}
