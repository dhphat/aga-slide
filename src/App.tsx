import { Slide1_Hero } from './components/slides/Slide1_Hero';
import { Slide2_Problem } from './components/slides/Slide2_Problem';
import { Slide3_Claims } from './components/slides/Slide3_Claims';
import { Slide4_PriorArt } from './components/slides/Slide4_PriorArt';
import { Slide5_Architecture } from './components/slides/Slide5_Architecture';
import { Slide6_Agents } from './components/slides/Slide6_Agents';
import { Slide7_Memory } from './components/slides/Slide7_Memory';
import { Slide8_Measurement } from './components/slides/Slide8_Measurement';
import { Slide9_Accuracy } from './components/slides/Slide9_Accuracy';
import { Slide10_Comparison } from './components/slides/Slide10_Comparison';
import { Slide11_Demo } from './components/slides/Slide11_Demo';
import { Slide12_Runtime } from './components/slides/Slide12_Runtime';
import { Slide13_Edges } from './components/slides/Slide13_Edges';
import { Slide14_TechStack } from './components/slides/Slide14_TechStack';
import { Slide15_Wrap } from './components/slides/Slide15_Wrap';
import { Slide16_End } from './components/slides/Slide16_End';
import { Slide17_Ablation } from './components/slides/Slide17_Ablation';

import { GridBackground } from './components/GridBackground';
import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <main 
          id="main-scroll-container" 
          className="relative h-screen w-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory no-scrollbar font-sans selection:bg-cyber-cyan/30 transition-colors duration-300"
          style={{
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-color)'
          }}
        >
          <GridBackground />
          <ThemeSwitcher />
          <LanguageSwitcher />
          <div className="relative z-10">
            <Slide1_Hero />
            <Slide2_Problem />
            <Slide3_Claims />
            <Slide4_PriorArt />
            <Slide5_Architecture />
            <Slide6_Agents />
            <Slide7_Memory />
            <Slide8_Measurement />
            <Slide9_Accuracy />
            <Slide10_Comparison />
            <Slide11_Demo />
            <Slide12_Runtime />
            <Slide13_Edges />
            <Slide14_TechStack />
            <Slide15_Wrap />
            <Slide16_End />
            <Slide17_Ablation />
          </div>
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
}
