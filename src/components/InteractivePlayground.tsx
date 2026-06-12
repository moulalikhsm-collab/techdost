import React, { useState } from 'react';
import {
  Code,
  Cpu,
  Sparkles,
  Smartphone,
  Play,
  RotateCcw,
  ToggleLeft,
  ToggleRight,
  Sun,
  Droplets,
  Thermometer,
  ArrowRight,
  Sparkle,
  Terminal,
  Activity,
  Check
} from 'lucide-react';

type SkillTab = 'web-dev' | 'electronics' | 'prompts';

export default function InteractivePlayground() {
  const [activeTab, setActiveTab] = useState<SkillTab>('web-dev');

  // Web Dev Tab States
  const [webTitle, setWebTitle] = useState('Welcome to TechDost');
  const [webColor, setWebColor] = useState('sky');
  const [webRadius, setWebRadius] = useState('lg');
  const [webBorder, setWebBorder] = useState(true);
  const [webShadow, setWebShadow] = useState(true);

  // Electronics Tab States
  const [pumpActive, setPumpActive] = useState(false);
  const [tempActive, setTempActive] = useState(false);
  const [ambientLight, setAmbientLight] = useState(40); // 0-100 slider
  const [soilMoisture, setSoilMoisture] = useState(25); // percentage

  // Prompt Tab States
  const [strategy, setStrategy] = useState<'none' | 'few-shot' | 'system-constraints'>('none');
  const [isExecuting, setIsExecuting] = useState(false);
  const [promptOutput, setPromptOutput] = useState('');

  // Run Prompt Execution Simulation
  const handleExecutePrompt = () => {
    setIsExecuting(true);
    setPromptOutput('');
    setTimeout(() => {
      setIsExecuting(false);
      if (strategy === 'few-shot') {
        setPromptOutput(
          JSON.stringify(
            {
              recommended_path: 'Data Science & Machine Learning Engineer',
              recommended_tools: ['Python', 'Pandas', 'XGBoost', 'TensorFlow'],
              timeframe: '6 - 9 Months',
              immediate_action: 'Enroll in the TechDost Applied AI Module'
            },
            null,
            2
          )
        );
      } else if (strategy === 'system-constraints') {
        setPromptOutput(
          `[SYSTEM GUARDRAILS: ENABLED]\n[MODE: CAREER_COACH]\n\nDear student,\nThank you for stating your love of code. Based on the JSON constraint profiles set in the system template, I recommend focusing on Web Application backends. \n- Primary Focus: Node.js, Express, PostgreSQL.\n- Current Job Growth index: +45% YoY.`
        );
      } else {
        setPromptOutput(
          "Ummm... standard output: You should study computer stuff. Learn variables. Python is good too."
        );
      }
    }, 1200);
  };

  const handleResetElectronics = () => {
    setPumpActive(false);
    setTempActive(false);
    setAmbientLight(40);
    setSoilMoisture(25);
  };

  return (
    <section id="playground" className="py-24 bg-slate-950 relative border-y border-slate-900">
      {/* Visual background lights */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-bold bg-emerald-500/10 px-3.5 py-1.5 rounded-full">
            EXPERIENCE LIVE LEARNING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            The TechDost Try-a-Skill Simulator
          </h2>
          <p className="text-slate-400 text-base">
            Don't take our word for it. Tinker with our interactive learning blocks below to see how easy it is to manage visual layouts, wire physical microchips, or program smart systems.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-md">
          {/* Controls Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-white">Select a Sandbox</h3>
              <p className="text-xs text-slate-400">Jump between 3 specialized skill domains taught in class</p>
            </div>

            {/* Sandbox Tabs */}
            <div className="flex flex-col space-y-2.5">
              <button
                onClick={() => setActiveTab('web-dev')}
                className={`flex items-center space-x-4 p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  activeTab === 'web-dev'
                    ? 'bg-sky-500/10 border-sky-500 text-white'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className={`p-2.5 rounded-lg ${activeTab === 'web-dev' ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-950 text-slate-500'}`}>
                  <Code className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold font-display">1. Web Development Layouts</span>
                  <span className="text-[11px] text-slate-500">Edit elements and watch real-time styling changes</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('electronics')}
                className={`flex items-center space-x-4 p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  activeTab === 'electronics'
                    ? 'bg-emerald-500/10 border-emerald-500 text-white'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className={`p-2.5 rounded-lg ${activeTab === 'electronics' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-950 text-slate-500'}`}>
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold font-display">2. Electronics & IoT Wiring</span>
                  <span className="text-[11px] text-slate-500">Connect automated sensors and read board feeds</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab('prompts')}
                className={`flex items-center space-x-4 p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  activeTab === 'prompts'
                    ? 'bg-indigo-500/10 border-indigo-500 text-white'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className={`p-2.5 rounded-lg ${activeTab === 'prompts' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-950 text-slate-500'}`}>
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold font-display">3. Prompt Optimization Engine</span>
                  <span className="text-[11px] text-slate-500">Apply instruction templates to double output quality</span>
                </div>
              </button>
            </div>

            {/* Sub-Interactive Adjuster Controls based on active tab */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <span className="text-xs font-bold font-mono tracking-widest text-slate-500 uppercase block">
                Sandbox Parameters
              </span>

              {/* WEB DEV TAB OPTIONS */}
              {activeTab === 'web-dev' && (
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="space-y-1.5">
                    <label className="text-slate-300 font-semibold">Change Headline Title</label>
                    <input
                      type="text"
                      value={webTitle}
                      onChange={(e) => setWebTitle(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-2.5 text-white text-xs outline-none focus:border-sky-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-semibold">Core Accent</label>
                      <select
                        value={webColor}
                        onChange={(e) => setWebColor(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs outline-none cursor-pointer"
                      >
                        <option value="sky">Ocean Sky</option>
                        <option value="indigo">Violet Indigo</option>
                        <option value="amber">Warm Amber</option>
                        <option value="emerald">Cyber Emerald</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-300 font-semibold font-sans">Border Radius</label>
                      <select
                        value={webRadius}
                        onChange={(e) => setWebRadius(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white text-xs outline-none cursor-pointer"
                      >
                        <option value="none">Zero Radius</option>
                        <option value="md">Rounded (Medium)</option>
                        <option value="lg">Rounded (Large)</option>
                        <option value="3xl">Capsule Pill</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-1 border-t border-slate-850 mt-2">
                    <span className="text-slate-400 font-medium">Render Code Ring</span>
                    <button
                      onClick={() => setWebBorder(!webBorder)}
                      className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {webBorder ? <ToggleRight className="h-7 w-7 text-sky-400 fill-sky-400/20" /> : <ToggleLeft className="h-7 w-7 text-slate-600" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-slate-850">
                    <span className="text-slate-400 font-medium">Apply Depth Shadow</span>
                    <button
                      onClick={() => setWebShadow(!webShadow)}
                      className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {webShadow ? <ToggleRight className="h-7 w-7 text-sky-400 fill-sky-400/20" /> : <ToggleLeft className="h-7 w-7 text-slate-600" />}
                    </button>
                  </div>
                </div>
              )}

              {/* ELECTRONICS TAB OPTIONS */}
              {activeTab === 'electronics' && (
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-slate-800/50">
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-4 w-4 text-teal-400" />
                      <span className="font-semibold text-slate-300">Irrigation Solenoid Pump</span>
                    </div>
                    <button
                      onClick={() => {
                        setPumpActive(!pumpActive);
                        if (!pumpActive) {
                          setSoilMoisture(85);
                        } else {
                          setSoilMoisture(34);
                        }
                      }}
                      className="cursor-pointer"
                    >
                      {pumpActive ? (
                        <ToggleRight className="h-7 w-7 text-emerald-400 fill-emerald-400/20" />
                      ) : (
                        <ToggleLeft className="h-7 w-7 text-slate-600" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-slate-800/50">
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-amber-500" />
                      <span className="font-semibold text-slate-300">Climate Incubator Heater</span>
                    </div>
                    <button
                      onClick={() => setTempActive(!tempActive)}
                      className="cursor-pointer"
                    >
                      {tempActive ? (
                        <ToggleRight className="h-7 w-7 text-emerald-400 fill-emerald-400/20" />
                      ) : (
                        <ToggleLeft className="h-7 w-7 text-slate-600" />
                      )}
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Sun className="h-4 w-4 text-amber-400" />
                        <span className="font-semibold text-slate-300">Ambient Greenhouse Daylight</span>
                      </div>
                      <span className="font-mono text-xs text-slate-400">{ambientLight} Lux</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={ambientLight}
                      onChange={(e) => setAmbientLight(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                    />
                  </div>

                  <div className="flex justify-end pt-3">
                    <button
                      onClick={handleResetElectronics}
                      className="flex items-center space-x-1.5 text-slate-500 hover:text-slate-300 text-xs transition-colors cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Reset Board Variables</span>
                    </button>
                  </div>
                </div>
              )}

              {/* PROMPTS ENGINEERING OPTIONS */}
              {activeTab === 'prompts' && (
                <div className="space-y-4 text-xs sm:text-sm">
                  <span className="block text-slate-400 font-sans leading-relaxed">
                    Select a structured strategy below to evaluate how prompt structure upgrades outputs dramatically.
                  </span>

                  <div className="space-y-2.5">
                    <label className="flex items-center space-x-3 p-3 bg-slate-950 rounded-xl border border-slate-805/40 cursor-pointer">
                      <input
                        type="radio"
                        checked={strategy === 'none'}
                        onChange={() => setStrategy('none')}
                        className="accent-indigo-500"
                      />
                      <div>
                        <span className="font-bold text-slate-100 block">Naive Raw Query</span>
                        <span className="text-[11px] text-slate-500">Simple keyword typing with no context rules</span>
                      </div>
                    </label>

                    <label className="flex items-center space-x-3 p-3 bg-slate-950 rounded-xl border border-slate-850 cursor-pointer">
                      <input
                        type="radio"
                        checked={strategy === 'few-shot'}
                        onChange={() => setStrategy('few-shot')}
                        className="accent-indigo-500"
                      />
                      <div>
                        <span className="font-bold text-slate-100 block">Few-Shot Structured Templates</span>
                        <span className="text-[11px] text-slate-500">Inject 3 examples forces systematic JSON structures</span>
                      </div>
                    </label>

                    <label className="flex items-center space-x-3 p-3 bg-slate-950 rounded-xl border border-slate-850 cursor-pointer">
                      <input
                        type="radio"
                        checked={strategy === 'system-constraints'}
                        onChange={() => setStrategy('system-constraints')}
                        className="accent-indigo-500"
                      />
                      <div>
                        <span className="font-bold text-slate-100 block">System Guardrails & Role Constraints</span>
                        <span className="text-[11px] text-slate-500">Explicit safety guidelines and focus filters</span>
                      </div>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Real-time Rendered Preview Panel */}
          <div className="lg:col-span-7 flex flex-col bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden relative min-h-[400px]">
            {/* Window bar */}
            <div className="bg-slate-900/60 px-4 py-3 border-b border-slate-850 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
                <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-xs text-slate-400 font-mono tracking-wide flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-sky-400" />
                {activeTab === 'web-dev' && 'LIVE_WEB_RENDERER.exe'}
                {activeTab === 'electronics' && 'ARDUINO_SERIAL_MONITOR'}
                {activeTab === 'prompts' && 'GEMINI_INFERENCE_CONSOLE'}
              </span>
              <div className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            </div>

            {/* PREVIEW CONTAINER BODY */}
            <div className="flex-1 p-6 sm:p-8 flex items-center justify-center relative bg-slate-950">
              {/* 1. WEB DEV PREVIEW RENDERING */}
              {activeTab === 'web-dev' && (
                <div className="space-y-4 w-full max-w-sm text-center">
                  <div
                    className={`p-6 transition-all duration-300 ${
                      webShadow ? 'shadow-2xl shadow-sky-500/10' : ''
                    } ${
                      webBorder ? 'border-2 border-dashed' : 'border border-solid'
                    } ${
                      webRadius === 'none' ? 'rounded-none' : ''
                    } ${
                      webRadius === 'md' ? 'rounded-xl' : ''
                    } ${
                      webRadius === 'lg' ? 'rounded-2xl' : ''
                    } ${
                      webRadius === '3xl' ? 'rounded-[32px]' : ''
                    } ${
                      webColor === 'sky' ? 'border-sky-500/30 bg-slate-900/40 text-sky-300' : ''
                    } ${
                      webColor === 'indigo' ? 'border-indigo-500/30 bg-slate-900/40 text-indigo-300' : ''
                    } ${
                      webColor === 'amber' ? 'border-amber-500/30 bg-slate-900/40 text-amber-300' : ''
                    } ${
                      webColor === 'emerald' ? 'border-emerald-500/30 bg-slate-900/40 text-emerald-300' : ''
                    }`}
                  >
                    <span className="text-[10px] font-mono tracking-widest block mb-1">PREVIEW ELEMENT</span>
                    <h4 className="text-lg font-bold text-white font-display leading-snug">
                      {webTitle || 'Default Title'}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 font-sans">
                      CSS class helper applied: <code className="font-mono text-sky-300 bg-slate-950 px-1 py-0.5 rounded">r-{webRadius} {webColor}</code>
                    </p>
                  </div>
                  <span className="block text-[10px] font-mono text-slate-500">
                    * Directly adjust inputs on left pane to watch dynamic property mapping variables refresh!
                  </span>
                </div>
              )}

              {/* 2. ELECTRONICS BOARD SIMULATOR */}
              {activeTab === 'electronics' && (
                <div className="w-full max-w-md space-y-6">
                  {/* Virtual Board Graphics representation */}
                  <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Activity className="h-4 w-4 text-emerald-400" />
                        <span className="text-xs font-bold text-slate-200 uppercase font-mono">Mega_Atmel328 Controller</span>
                      </div>
                      <span className="text-[10px] font-mono bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 px-2.5 py-0.5 rounded-full">
                        SERIAL CONNECTED
                      </span>
                    </div>

                    {/* Sensor Data Panels Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Humidity Metric */}
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 text-left">
                        <span className="block text-[10px] font-mono text-slate-500">SOIL MOISTURE</span>
                        <div className="flex items-baseline space-x-2 mt-1">
                          <span className="text-2xl font-bold font-mono text-white">{soilMoisture}%</span>
                          <span className="text-xs text-slate-500 font-medium">
                            {soilMoisture > 50 ? 'Wet' : 'Dry'}
                          </span>
                        </div>
                        {/* Progress line */}
                        <div className="h-1 w-full bg-slate-900 rounded-full mt-2 overflow-hidden">
                          <div
                            className="h-full bg-teal-400 transition-all duration-300"
                            style={{ width: `${soilMoisture}%` }}
                          />
                        </div>
                      </div>

                      {/* Climate Air Thermometer indicator */}
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 text-left">
                        <span className="block text-[10px] font-mono text-slate-500">HOTBED ENCLOSURE</span>
                        <div className="flex items-baseline space-x-2 mt-1">
                          <span className="text-2xl font-bold font-mono text-white">
                            {tempActive ? '34.8' : '20.2'}°C
                          </span>
                          <span className="text-xs text-slate-500 font-mono">
                            {tempActive ? 'HEAT_ON' : 'STABLE'}
                          </span>
                        </div>
                        {/* Progress line */}
                        <div className="h-1 w-full bg-slate-900 rounded-full mt-2 overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${tempActive ? 'bg-rose-500' : 'bg-blue-400'}`}
                            style={{ width: tempActive ? '85%' : '48%' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Hardware Console Logs */}
                    <div className="p-3 bg-slate-950 rounded-lg border border-slate-850 font-mono text-[11px] text-emerald-400/90 text-left space-y-1.5 min-h-[90px] overflow-y-auto">
                      <div>analogRead(A0) SoilMoisture = {soilMoisture * 10}</div>
                      <div>analogRead(A1) DaylightLux = {ambientLight * 8}</div>
                      {ambientLight < 30 ? (
                        <div className="text-amber-400 bg-amber-500/5 px-1 rounded border border-amber-500/10">
                          &gt; THRESHOLD MIN: Pin(13) high-beam LED auto-turned ON
                        </div>
                      ) : (
                        <div>&gt; Ambient light sufficient: LED Pin(13) OFF</div>
                      )}
                      {pumpActive ? (
                        <div className="text-teal-400 bg-teal-500/5 px-1 rounded border border-teal-500/10">
                          &gt; relay_write(PIN_4, HIGH) : Pump motor pumping water drops...
                        </div>
                      ) : (
                        <div className="text-slate-500">&gt; relay_write(PIN_4, LOW) : Irrigation pump idle</div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 3. PROMPT SANDBOX VISUALIZATION */}
              {activeTab === 'prompts' && (
                <div className="w-full max-w-md space-y-4 text-left">
                  {/* Current Prompt container */}
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                    <span className="block text-[10px] text-slate-400 font-mono uppercase bg-slate-950 px-2 py-0.5 rounded max-w-max">
                      STRUCTURED INPUT STRING
                    </span>
                    <div className="text-xs text-slate-300 font-mono leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850 max-h-[120px] overflow-y-auto">
                      {strategy === 'none' && (
                        <span>"I want to code. Give me job options using python coding variables."</span>
                      )}
                      {strategy === 'few-shot' && (
                        <span>
                          "Act as a professional CS career counselor. Return key learning guidelines strictly formatted as JSON profiles. <br />
                          Examples:<br />
                          Q: Python programmer.<br />
                          A: {'{ "path": "Backend Dev", "tools": ["Django", "SQL"] }'}<br />
                          Q: I want to code."
                        </span>
                      )}
                      {strategy === 'system-constraints' && (
                        <span>
                          "&lt;system_instructions&gt; You are a career mentorship system. Do not suggest other general fields except high-growth programming. Filter options, use standard safety, and report YoY percentages of job growth.&lt;/system_instructions&gt;<br />
                          Input: I want to code."
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Sandbox Run Action button */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 font-mono">
                      Target Engine: Gemini-2.5-Flash
                    </span>
                    <button
                      onClick={handleExecutePrompt}
                      disabled={isExecuting}
                      className="px-4 py-2 bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {isExecuting ? (
                        <span>Processing LLM tokens...</span>
                      ) : (
                        <>
                          <Play className="h-3 w-3 fill-slate-950" />
                          <span>Run Prompt</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Sandboxed Outputs */}
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 min-h-[140px] flex flex-col justify-between">
                    <div>
                      <span className="block text-[10px] text-indigo-400 font-mono uppercase mb-2">
                        Structured Output Console
                      </span>
                      {isExecuting ? (
                        <div className="space-y-2 font-mono text-xs text-slate-400">
                          <div className="h-2.5 w-3/4 bg-slate-800 rounded animate-pulse" />
                          <div className="h-2.5 w-1/2 bg-slate-800 rounded animate-pulse" />
                          <div className="h-2.5 w-5/6 bg-slate-800 rounded animate-pulse" />
                        </div>
                      ) : promptOutput ? (
                        <pre className="font-mono text-xs text-slate-200 whitespace-pre-wrap">
                          {promptOutput}
                        </pre>
                      ) : (
                        <span className="text-xs text-slate-500 italic block">
                          Click "Run Prompt" above to see the output generated with the selected template strategy. Compare basic versus engineered inputs.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom mini banner prompting to join course */}
            <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-2 text-xs">
                <Sparkle className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">
                  Ready to construct interfaces or wire hardware templates for real?
                </span>
              </div>
              <a
                href="#courses"
                className="text-xs text-sky-400 hover:text-sky-300 font-extrabold flex items-center space-x-1"
              >
                <span>Select Course Tracks</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
