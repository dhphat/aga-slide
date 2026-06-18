/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeroSlide } from './components/slides/HeroSlide';
import { DataPipelineSlide } from './components/slides/DataPipelineSlide';
import { ArchitectureSlide } from './components/slides/ArchitectureSlide';
import { MLChurnSlide } from './components/slides/MLChurnSlide';
import { AnomalySlide } from './components/slides/AnomalySlide';
import { CTASlide } from './components/slides/CTASlide';
import { GridBackground } from './components/GridBackground';
import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

export default function App() {
  return (
    <LanguageProvider>
      <main id="main-scroll-container" className="relative h-screen w-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory no-scrollbar bg-cyber-bg text-white font-sans selection:bg-cyber-cyan/30">
        <GridBackground />
        <LanguageSwitcher />
        <div className="relative z-10">
          <HeroSlide />
          <DataPipelineSlide />
          <ArchitectureSlide />
          <MLChurnSlide />
          <AnomalySlide />
          <CTASlide />
        </div>
      </main>
    </LanguageProvider>
  );
}
