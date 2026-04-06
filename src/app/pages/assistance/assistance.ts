import { Component, signal } from '@angular/core';
import { HeaderList } from '../../components/header-list/header-list';
import { Footer } from '../../components/footer/footer';
import { Instruction } from '../../interfaces/instruction.interface';
import { INSTRUCTIONS_DATA } from '../../data/instructions.data';

@Component({
  selector: 'app-assistance',
  imports: [HeaderList, Footer],
  templateUrl: './assistance.html',
  styleUrl: './assistance.css',
})
export class Assistance {
  selectedInstruction = signal<Instruction | null>(null);
  instructions = INSTRUCTIONS_DATA;

  showInstructions(instruction: Instruction) {
    this.selectedInstruction.set(instruction);
  }

  goBack() {
    this.selectedInstruction.set(null);
  }
}