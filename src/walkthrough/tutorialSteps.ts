import { TutorialStep } from './tutorialTypes';

export const TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: 'step-base-color',
    target: '[data-tour="base-color"]',
    title: 'Start with a Base Color',
    message: 'Enter a HEX code or use the color picker to set the foundation of your palette.',
    placement: 'right',
  },
  {
    id: 'step-harmony-rule',
    target: '[data-tour="harmony-rule"]',
    title: 'Choose a Harmony Rule',
    message: 'Select a color theory rule. We will mathematically generate the rest of the palette.',
    placement: 'right',
  },
  {
    id: 'step-generate',
    target: '[data-tour="generate-random"]',
    title: 'Or Go Random',
    message: 'Feeling lucky? Generate a completely random harmonious palette.',
    placement: 'right',
  },
  {
    id: 'step-workspace',
    target: '[data-tour="workspace"]',
    title: 'Your Palette',
    message: 'Here are your generated colors. Each swatch is assigned a specific role like Primary or Background.',
    placement: 'bottom',
  },
  {
    id: 'step-contrast',
    target: '[data-tour="contrast-score"]',
    title: 'Check Contrast',
    message: 'We automatically calculate accessibility scores to ensure your colors are readable.',
    placement: 'top',
  },
  {
    id: 'step-inspector',
    target: '[data-tour="inspector"]',
    title: 'Export & Save',
    message: 'Save palettes to your history or export them instantly as CSS variables or AI ColorPrompts.',
    placement: 'left',
  },
  {
    id: 'step-palette-lab',
    target: '[data-tour="palette-lab"]',
    title: 'Palette Lab',
    message: 'Test your palette on real UI components before you export. See how it looks in context!',
    placement: 'bottom',
  }
];
