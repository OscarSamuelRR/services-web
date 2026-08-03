import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DiscoverMorelosCont } from '../../interfaces/discover-morelos-cont.interface';
import { DISCOVER_MORELOS_CONTENT } from '../../data/discover-morelos.data';
import { SafeUrlPipe } from '../../pipes/safe-url-pipe';

@Component({
  selector: 'app-discover-morelos-content-place',
  imports: [RouterLink, Footer, HeaderList, TranslateModule, SafeUrlPipe],
  templateUrl: './discover-morelos-content-place.html',
  styleUrl: './discover-morelos-content-place.css',
})
export class DiscoverMorelosContentPlace {
  discoverMorelosContent = signal<DiscoverMorelosCont | undefined>(undefined);
  backRoute = signal<string>('');
  currentImageIndex = signal<number>(0);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.discoverMorelosContent.set(DISCOVER_MORELOS_CONTENT.find(o => o.id === id));
    this.backRoute.set(`/discover-morelos-content/${this.discoverMorelosContent()!.section}`);
  }

  nextImage() {
    const images = this.discoverMorelosContent()?.images ?? [];
    this.currentImageIndex.set(
      (this.currentImageIndex() + 1) % images.length
    );
  }

  prevImage() {
    const images = this.discoverMorelosContent()?.images ?? [];
    this.currentImageIndex.set(
      (this.currentImageIndex() - 1 + images.length) % images.length
    );
  }
}
