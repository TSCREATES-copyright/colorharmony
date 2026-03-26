import { SimulationScenario, SimulationTheme } from './simulationTypes';

interface OutcomePreviewProps {
  scenario: SimulationScenario;
  theme: SimulationTheme;
}

export function OutcomePreview({ scenario, theme }: OutcomePreviewProps) {
  if (scenario === 'dashboard') {
    return <DashboardPreview theme={theme} />;
  }
  if (scenario === 'landing-page') {
    return <LandingPagePreview theme={theme} />;
  }
  if (scenario === 'mobile-app') {
    return <MobileAppPreview theme={theme} />;
  }
  return null;
}

function DashboardPreview({ theme }: { theme: SimulationTheme }) {
  return (
    <div 
      className="w-full max-w-2xl h-[400px] rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col transition-colors duration-300"
      style={{ backgroundColor: theme.background }}
    >
      <div 
        className="h-12 border-b flex items-center px-4 gap-4 transition-colors duration-300"
        style={{ backgroundColor: theme.surface, borderColor: theme.muted + '40' }}
      >
        <div className="w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-300" style={{ backgroundColor: theme.primary }}>
          <div className="w-4 h-4 rounded-sm" style={{ backgroundColor: theme.surface }} />
        </div>
        <div className="h-4 w-32 rounded transition-colors duration-300" style={{ backgroundColor: theme.muted + '40' }} />
        <div className="ml-auto h-8 w-8 rounded-full transition-colors duration-300" style={{ backgroundColor: theme.secondary }} />
      </div>
      <div className="flex-1 flex p-4 gap-4">
        <div className="w-48 flex flex-col gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className="h-8 rounded transition-colors duration-300" 
              style={{ backgroundColor: i === 1 ? theme.primary + '20' : 'transparent' }}
            >
              <div 
                className="h-full w-3/4 rounded ml-2 transition-colors duration-300" 
                style={{ backgroundColor: i === 1 ? theme.primary : theme.muted + '60' }} 
              />
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div 
            className="h-32 rounded-lg p-4 transition-colors duration-300"
            style={{ backgroundColor: theme.surface, border: `1px solid ${theme.muted}40` }}
          >
            <div className="h-4 w-1/4 rounded mb-4 transition-colors duration-300" style={{ backgroundColor: theme.text }} />
            <div className="h-12 w-full rounded transition-colors duration-300" style={{ backgroundColor: theme.accent + '40' }} />
          </div>
          <div className="flex gap-4 flex-1">
            <div 
              className="flex-1 rounded-lg transition-colors duration-300"
              style={{ backgroundColor: theme.surface, border: `1px solid ${theme.muted}40` }}
            />
            <div 
              className="flex-1 rounded-lg transition-colors duration-300"
              style={{ backgroundColor: theme.surface, border: `1px solid ${theme.muted}40` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingPagePreview({ theme }: { theme: SimulationTheme }) {
  return (
    <div 
      className="w-full max-w-2xl h-[400px] rounded-xl shadow-lg border border-gray-200 overflow-hidden flex flex-col transition-colors duration-300"
      style={{ backgroundColor: theme.background }}
    >
      <div className="h-16 flex items-center justify-between px-8">
        <div className="text-xl font-bold transition-colors duration-300" style={{ color: theme.primary }}>Brand</div>
        <div className="flex gap-4">
          <div className="w-16 h-8 rounded transition-colors duration-300" style={{ backgroundColor: theme.muted + '40' }} />
          <div className="w-24 h-8 rounded transition-colors duration-300" style={{ backgroundColor: theme.primary }} />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-3/4 h-12 rounded-lg mb-6 transition-colors duration-300" style={{ backgroundColor: theme.text }} />
        <div className="w-1/2 h-4 rounded mb-2 transition-colors duration-300" style={{ backgroundColor: theme.muted }} />
        <div className="w-2/5 h-4 rounded mb-8 transition-colors duration-300" style={{ backgroundColor: theme.muted }} />
        <div className="flex gap-4">
          <div className="w-32 h-12 rounded-lg transition-colors duration-300" style={{ backgroundColor: theme.primary }} />
          <div className="w-32 h-12 rounded-lg border-2 transition-colors duration-300" style={{ borderColor: theme.secondary, backgroundColor: 'transparent' }} />
        </div>
      </div>
    </div>
  );
}

function MobileAppPreview({ theme }: { theme: SimulationTheme }) {
  return (
    <div 
      className="w-[280px] h-[560px] rounded-[2.5rem] shadow-2xl border-[8px] border-gray-800 overflow-hidden flex flex-col transition-colors duration-300 relative"
      style={{ backgroundColor: theme.background }}
    >
      <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-xl mx-16 z-10" />
      <div 
        className="h-48 p-6 flex flex-col justify-end transition-colors duration-300"
        style={{ backgroundColor: theme.primary }}
      >
        <div className="w-1/2 h-6 rounded mb-2 transition-colors duration-300" style={{ backgroundColor: theme.surface }} />
        <div className="w-3/4 h-4 rounded opacity-80 transition-colors duration-300" style={{ backgroundColor: theme.surface }} />
      </div>
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i}
            className="h-20 rounded-xl p-4 flex items-center gap-4 transition-colors duration-300 shadow-sm"
            style={{ backgroundColor: theme.surface }}
          >
            <div className="w-12 h-12 rounded-full transition-colors duration-300" style={{ backgroundColor: i % 2 === 0 ? theme.secondary : theme.accent }} />
            <div className="flex-1">
              <div className="w-3/4 h-4 rounded mb-2 transition-colors duration-300" style={{ backgroundColor: theme.text }} />
              <div className="w-1/2 h-3 rounded transition-colors duration-300" style={{ backgroundColor: theme.muted }} />
            </div>
          </div>
        ))}
      </div>
      <div 
        className="h-16 border-t flex items-center justify-around px-4 transition-colors duration-300"
        style={{ backgroundColor: theme.surface, borderColor: theme.muted + '40' }}
      >
        {[1, 2, 3, 4].map((i) => (
          <div 
            key={i}
            className="w-8 h-8 rounded-full transition-colors duration-300"
            style={{ backgroundColor: i === 1 ? theme.primary : theme.muted + '40' }}
          />
        ))}
      </div>
    </div>
  );
}
