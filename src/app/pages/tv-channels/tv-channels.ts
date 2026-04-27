import { Component } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { TvChannel } from '../../interfaces/tv-channel.interface';
import { TV_CHANNELS } from '../../data/tv-channels.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tv-channels',
  imports: [HeaderList, Footer, TranslateModule],
  templateUrl: './tv-channels.html',
})
export class TvChannels {
  channels: TvChannel[] = TV_CHANNELS;

  get categories(): string[] {
    return [...new Set(this.channels.map(c => c.category))];
  }

  getByCategory(category: string): TvChannel[] {
    return this.channels.filter(c => c.category === category);
  }
}