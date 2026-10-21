import React, { useState } from 'react';
import { Sparkles, Bot, Send, RefreshCw, FileText, CheckCircle2, Copy, Download, Layers, ShieldCheck, X, Headphones, Target, HeartHandshake, Briefcase } from 'lucide-react';
import { ChatMessage, TalentRoleKey } from '../types/index.ts';

interface AiAssistantWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'report' | 'chat' | 'audit';
}

export const AiAssistantWidget: React.FC<AiAssistantWidgetProps> = ({
  isOpen,
  onClose,
  initialMode = 'report',
}) => {
  const [activeTab, setActiveTab] = useState<'report' | 'chat' | 'audit'>(initialMode);

  // Daily Report State
  const [clientName, setClientName] = useState('Acme Health Technologies');
  const [reportRole, setReportRole] = useState<'all' | TalentRoleKey>('all');
  const [generatedReport, setGeneratedReport] = useState<string | null>(null);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [copied, setCopied] = useState(false);

  // Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'assistant',
      text: "Welcome to Cohesion Consulting. 'Our agents embedded into your teams and workflow giving a team member feeling working towards your goal.' How can I assist you today with our Customer Support Reps (CSR), Business Development Reps (BDR), Account Managers (AM), or Account Executives (AE)?",
      timestamp: '11:00 AM',
    },
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [isSendingChat, setIsSendingChat] = useState(false);

  // Audit State
  const [legacySystem, setLegacySystem] = useState('HubSpot Enterprise + Zendesk + Slack');
  const [clientGoal, setClientGoal] = useState('Embed 2 BDRs and 1 CSR without changing our existing CRM or ticketing workflows');
  const [auditResult, setAuditResult] = useState<string | null>(null);
  const [isAuditing, setIsAuditing] = useState(false);

  // Generate Daily Report
  const handleGenerateReport = async () => {
    setIsGeneratingReport(true);
    try {
      const res = await fetch('/api/ai/daily-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName,
          focus: reportRole === 'all' ? 'All Roles (CSR, BDR, AM, AE)' : `${reportRole.toUpperCase()} Embedded Agent Role`,
        }),
      });
      const data = await res.json();
      if (data.report) {
        setGeneratedReport(data.report);
      }
    } catch (err) {
      console.error('Report generation error:', err);
    } finally {
      setIsGeneratingReport(false);
    }
  };

  // Send Chat Message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const userText = inputMsg;
    setInputMsg('');
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsSendingChat(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.reply || "I am analyzing your inquiry through our operations engine.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: "Cohesion Consulting operations note: 'Our agents embedded into your teams and workflow giving a team member feeling working towards your goal.' We provide dedicated CSR, BDR, AM, and AE specialists with zero workflow disruption.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsSendingChat(false);
    }
  };

  // Pragmatic Architecture Audit
  const handleRunAudit = async () => {
    setIsAuditing(true);
    try {
      const res = await fetch('/api/ai/audit-workflow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ legacySystem, clientGoal }),
      });
      const data = await res.json();
      if (data.blueprint) {
        setAuditResult(data.blueprint);
      }
    } catch (err) {
      console.error('Audit error:', err);
    } finally {
      setIsAuditing(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (text: string, filename: string) => {
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#18181b] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#121214]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white font-display">AI Operations Console</h3>
                <span className="text-[10px] font-mono text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  Gemini 3.8 Flash Powered
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans">
                Simulating automated daily activity logs, SLA metrics & performance diagnostics
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 py-2.5 border-b border-white/5 bg-[#121214] flex items-center gap-2 text-xs">
          <button
            onClick={() => setActiveTab('report')}
            className={`px-3.5 py-1.5 font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'report'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Daily Activity Digest</span>
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-3.5 py-1.5 font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'chat'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Embedded Advisor Chat</span>
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`px-3.5 py-1.5 font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'audit'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Pragmatic Integration Audit</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 font-sans text-xs">
          {/* TAB 1: DAILY ACTIVITY DIGEST */}
          {activeTab === 'report' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Client Organization
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-400"
                    placeholder="Enter client company name..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Target Embedded Role
                  </label>
                  <select
                    value={reportRole}
                    onChange={(e) => setReportRole(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-400"
                  >
                    <option value="all">Full Pod (CSR + BDR + AM + AE)</option>
                    <option value="csr">Customer Support Rep (CSR)</option>
                    <option value="bdr">Business Development Rep (BDR)</option>
                    <option value="am">Strategic Account Manager (AM)</option>
                    <option value="ae">Enterprise Account Executive (AE)</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <p className="text-xs text-slate-400 font-sans">
                  Simulates the 8:00 AM daily briefing delivered directly to executive Slack Connect channels.
                </p>
                <button
                  onClick={handleGenerateReport}
                  disabled={isGeneratingReport}
                  className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#9f1239] to-[#881337] hover:from-[#be123c] rounded-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-md"
                >
                  {isGeneratingReport ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Synthesizing Operations...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Generate Daily Digest</span>
                    </>
                  )}
                </button>
              </div>

              {/* Generated Report */}
              {generatedReport && (
                <div className="mt-4 p-5 bg-[#121214] border border-white/10 rounded-xl relative">
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono text-emerald-400 font-medium">Daily Telemetry Compiled</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(generatedReport)}
                        className="px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-white/5 rounded border border-white/10 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                      <button
                        onClick={() => handleDownload(generatedReport, `daily-digest-${clientName.toLowerCase().replace(/\s+/g, '-')}.md`)}
                        className="px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-white/5 rounded border border-white/10 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Download className="w-3 h-3" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>

                  <div className="prose prose-invert prose-sm max-w-none text-slate-300 whitespace-pre-wrap font-sans text-xs leading-relaxed">
                    {generatedReport}
                  </div>
                </div>
              )}

              {!generatedReport && !isGeneratingReport && (
                <div className="text-center py-10 border border-dashed border-white/10 rounded-xl bg-white/[0.01]">
                  <FileText className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                  <p className="text-xs text-slate-400">
                    Click "Generate Daily Digest" to simulate our automated morning AI telemetry reports.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: ADVISOR CHAT */}
          {activeTab === 'chat' && (
            <div className="flex flex-col h-[460px]">
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-3">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-xl text-xs leading-relaxed font-sans ${
                        m.sender === 'user'
                          ? 'bg-[#9f1239] text-white font-medium'
                          : 'bg-white/5 border border-white/10 text-slate-200'
                      }`}
                    >
                      {m.text}
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 px-1 font-mono">
                      {m.timestamp}
                    </span>
                  </div>
                ))}
                {isSendingChat && (
                  <div className="flex items-center gap-2 text-xs text-rose-400 p-2">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Analyzing operational parameters...</span>
                  </div>
                )}
              </div>

              {/* Quick Prompts */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 text-[11px] text-slate-400">
                <span className="shrink-0 text-slate-500">Quick prompts:</span>
                <button
                  onClick={() => setInputMsg("How does your embedded agent feeling differ from traditional outsourcing?")}
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 whitespace-nowrap cursor-pointer"
                >
                  Embedded Team Feeling
                </button>
                <button
                  onClick={() => setInputMsg("What are the key deliverables of your CSR and BDR roles?")}
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 whitespace-nowrap cursor-pointer"
                >
                  CSR & BDR Roles
                </button>
                <button
                  onClick={() => setInputMsg("How do you overlay HubSpot and Salesforce without disruption?")}
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 whitespace-nowrap cursor-pointer"
                >
                  Pragmatic Integration
                </button>
              </div>

              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  placeholder="Ask our AI Operations engine about embedded agents, SLAs, or workflows..."
                  className="flex-1 px-3 py-2 text-xs bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-400"
                />
                <button
                  type="submit"
                  disabled={!inputMsg.trim() || isSendingChat}
                  className="px-4 py-2 bg-[#9f1239] hover:bg-[#881337] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <span>Send</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: PRAGMATIC INTEGRATION AUDIT */}
          {activeTab === 'audit' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#4A0E17]/20 border border-rose-500/30 rounded-xl">
                <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wider mb-1 font-mono">
                  Pragmatic Tech Stack Overlay Audit
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  "Not fixing what isn't broken." Enter your existing CRM, ticketing tools, and team communication platforms. Our engine demonstrates how our embedded agents plug in on Day 1 without disrupting your current workflows.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Existing Platforms to Preserve (CRM, Ticketing, Communication)
                  </label>
                  <input
                    type="text"
                    value={legacySystem}
                    onChange={(e) => setLegacySystem(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Core Business Goal
                  </label>
                  <input
                    type="text"
                    value={clientGoal}
                    onChange={(e) => setClientGoal(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-400"
                  />
                </div>
              </div>

              <button
                onClick={handleRunAudit}
                disabled={isAuditing}
                className="w-full py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#9f1239] to-[#881337] hover:from-[#be123c] rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isAuditing ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Analyzing Integration Surface...</span>
                  </>
                ) : (
                  <>
                    <Layers className="w-3.5 h-3.5" />
                    <span>Run Pragmatic Integration Audit</span>
                  </>
                )}
              </button>

              {auditResult && (
                <div className="p-4 bg-[#121214] border border-white/10 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-rose-400 uppercase">
                      Integration Blueprint Verified
                    </span>
                    <button
                      onClick={() => handleCopy(auditResult)}
                      className="px-2 py-0.5 text-xs text-slate-400 hover:text-white bg-white/5 rounded"
                    >
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="prose prose-invert prose-sm text-slate-300 whitespace-pre-wrap text-xs leading-relaxed font-sans">
                    {auditResult}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
