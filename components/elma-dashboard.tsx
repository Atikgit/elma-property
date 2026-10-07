'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Bell,
  Bot,
  Building2,
  ChevronDown,
  CircleDollarSign,
  ClipboardList,
  FileText,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Paperclip,
  Plus,
  Send,
  Settings,
  Sparkles,
  Users,
  Wrench,
  X,
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Textarea } from '@/components/ui/textarea'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Properties', icon: Building2 },
  { label: 'Tenants', icon: Users },
  { label: 'Maintenance', icon: Wrench, count: '6' },
  { label: 'Financials', icon: CircleDollarSign },
]

const activities = [
  { icon: Wrench, title: 'Leaking faucet reported', detail: 'Unit 302 · Building A', time: '12 min ago', status: 'Open', tone: 'warning' },
  { icon: FileText, title: 'Lease renewal signed', detail: 'Jordan Lee · Unit 104', time: '1 hr ago', status: 'Completed', tone: 'success' },
  { icon: Wrench, title: 'HVAC inspection scheduled', detail: 'Building C · Common area', time: '3 hrs ago', status: 'Scheduled', tone: 'info' },
  { icon: FileText, title: 'New lease awaiting signature', detail: 'Sofia Martinez · Unit 208', time: 'Yesterday', status: 'Pending', tone: 'muted' },
]

const suggestions = ['Summarize tenant complaints', 'Draft a lease renewal email', 'Show open maintenance requests']

export function ElmaDashboard() {
  const [assistantOpen, setAssistantOpen] = useState(true)
  const [prompt, setPrompt] = useState('')
  const [messages, setMessages] = useState([
    { from: 'elma', text: 'Good morning, Alex. I’m ready to help you manage Elma Properties.' },
  ])

  function sendPrompt(value = prompt) {
    const trimmed = value.trim()
    if (!trimmed) return
    setMessages((current) => [
      ...current,
      { from: 'user', text: trimmed },
      { from: 'elma', text: 'I’ll review the property data and prepare that for you. This assistant is ready to connect to your LLM provider.' },
    ])
    setPrompt('')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[252px] flex-col border-r border-border/70 bg-sidebar px-4 py-5 lg:flex">
        <div className="flex items-center gap-3 px-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm"><Sparkles className="size-4" /></div>
          <div><div className="text-[17px] font-semibold tracking-tight">elma</div><div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">property intelligence</div></div>
        </div>
        <Separator className="my-7" />
        <p className="px-3 pb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Workspace</p>
        <nav className="flex flex-col gap-1" aria-label="Primary navigation">
          {navItems.map(({ label, icon: Icon, active, count }) => <Button key={label} variant={active ? 'secondary' : 'ghost'} className={`justify-start gap-3 px-3 font-medium ${active ? 'bg-primary/10 text-primary hover:bg-primary/15' : 'text-muted-foreground hover:text-foreground'}`}><Icon data-icon="inline-start" />{label}{count && <Badge variant="secondary" className="ml-auto rounded-full px-2 text-[10px]">{count}</Badge>}</Button>)}
        </nav>
        <div className="mt-auto flex flex-col gap-1"><Button variant="ghost" className="justify-start gap-3 px-3 text-muted-foreground"><Settings data-icon="inline-start" />Settings</Button><div className="mt-4 rounded-2xl bg-accent p-3"><div className="mb-2 flex items-center gap-2 text-xs font-semibold"><Bot className="size-4 text-primary" /> Elma AI</div><p className="text-[11px] leading-relaxed text-muted-foreground">Your portfolio copilot is online and ready.</p><Button size="sm" variant="outline" className="mt-3 w-full bg-background" onClick={() => setAssistantOpen(true)}>Open assistant</Button></div></div>
      </aside>

      <div className="lg:pl-[252px]">
        <header className="sticky top-0 z-10 flex h-[72px] items-center justify-between border-b border-border/70 bg-background/90 px-5 backdrop-blur-md sm:px-8">
          <div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation"><Menu /></Button><div><p className="text-xs text-muted-foreground">Monday, October 7, 2026</p><h1 className="text-lg font-semibold tracking-tight">Good morning, Alex</h1></div></div>
          <div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="relative" aria-label="Notifications"><Bell /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" /></Button><Separator orientation="vertical" className="hidden h-7 sm:block" /><div className="flex items-center gap-2.5"><Avatar className="size-8"><AvatarFallback className="bg-primary text-xs text-primary-foreground">AJ</AvatarFallback></Avatar><div className="hidden sm:block"><p className="text-sm font-medium">Alex Johnson</p><p className="text-[11px] text-muted-foreground">Administrator</p></div><ChevronDown className="hidden size-4 text-muted-foreground sm:block" /></div></div>
        </header>

        <main className="mx-auto max-w-[1600px] p-5 sm:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="mb-2 flex items-center gap-2 text-xs font-medium text-primary"><span className="size-1.5 rounded-full bg-primary" /> Portfolio overview</div><h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Your properties at a glance</h2><p className="mt-1 text-sm text-muted-foreground">Here’s what’s happening across your portfolio today.</p></div><Button className="w-fit gap-2 shadow-sm"><Plus data-icon="inline-start" /> Add property</Button></div>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Portfolio metrics">
            <MetricCard label="Total properties" value="24" change="+2 this year" icon={Building2} accent="blue" />
            <MetricCard label="Active tenants" value="186" change="94.2% occupancy" icon={Users} accent="purple" />
            <MetricCard label="Pending maintenance" value="6" change="2 high priority" icon={Wrench} accent="orange" />
            <MetricCard label="Monthly revenue" value="$48,290" change="+8.4% vs last month" icon={CircleDollarSign} accent="green" />
          </section>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_370px]">
            <Card className="overflow-hidden border-border/70 shadow-[0_8px_30px_-20px_rgba(29,53,87,0.3)]"><CardHeader className="flex flex-row items-center justify-between border-b border-border/60 px-5 py-4"><div><CardTitle className="text-base">Recent activity</CardTitle><p className="mt-1 text-xs text-muted-foreground">Keep up with what needs your attention.</p></div><Button variant="outline" size="sm" className="gap-2">View all <ArrowUpRight data-icon="inline-end" /></Button></CardHeader><CardContent className="p-0"><Table><TableHeader><TableRow className="hover:bg-transparent"><TableHead className="pl-5">Activity</TableHead><TableHead className="hidden md:table-cell">Property</TableHead><TableHead>Time</TableHead><TableHead className="pr-5 text-right">Status</TableHead></TableRow></TableHeader><TableBody>{activities.map(({ icon: Icon, title, detail, time, status, tone }) => <TableRow key={title}><TableCell className="pl-5"><div className="flex items-center gap-3"><div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground"><Icon className="size-4" /></div><div><p className="text-sm font-medium">{title}</p><p className="text-xs text-muted-foreground md:hidden">{detail}</p></div></div></TableCell><TableCell className="hidden text-xs text-muted-foreground md:table-cell">{detail}</TableCell><TableCell className="text-xs text-muted-foreground">{time}</TableCell><TableCell className="pr-5 text-right"><StatusBadge tone={tone}>{status}</StatusBadge></TableCell></TableRow>)}</TableBody></Table></CardContent></Card>

            {assistantOpen ? <Assistant messages={messages} prompt={prompt} setPrompt={setPrompt} sendPrompt={sendPrompt} close={() => setAssistantOpen(false)} /> : <Card className="flex min-h-[380px] flex-col items-center justify-center border-dashed border-primary/30 bg-primary/[0.025] p-8 text-center"><div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Bot className="size-6" /></div><h3 className="font-semibold">Elma AI Assistant</h3><p className="mt-2 max-w-[220px] text-sm text-muted-foreground">Ask questions about your properties, tenants, and operations.</p><Button className="mt-5" onClick={() => setAssistantOpen(true)}>Open assistant</Button></Card>}
          </div>
        </main>
      </div>
    </div>
  )
}

function MetricCard({ label, value, change, icon: Icon, accent }: { label: string; value: string; change: string; icon: typeof Building2; accent: string }) {
  const accentStyles = { blue: 'bg-blue-100 text-blue-700', purple: 'bg-violet-100 text-violet-700', orange: 'bg-orange-100 text-orange-700', green: 'bg-emerald-100 text-emerald-700' }
  return <Card className="border-border/70 shadow-[0_8px_30px_-20px_rgba(29,53,87,0.3)]"><CardContent className="p-5"><div className="flex items-start justify-between"><div><p className="text-xs font-medium text-muted-foreground">{label}</p><p className="mt-3 text-2xl font-semibold tracking-tight">{value}</p></div><div className={`flex size-9 items-center justify-center rounded-xl ${accentStyles[accent as keyof typeof accentStyles]}`}><Icon className="size-4" /></div></div><p className="mt-4 text-xs text-muted-foreground"><span className="font-medium text-emerald-600">{change}</span></p></CardContent></Card>
}

function StatusBadge({ tone, children }: { tone: string; children: React.ReactNode }) {
  const styles = { warning: 'bg-amber-50 text-amber-700 border-amber-200', success: 'bg-emerald-50 text-emerald-700 border-emerald-200', info: 'bg-blue-50 text-blue-700 border-blue-200', muted: 'bg-muted text-muted-foreground border-border' }
  return <Badge variant="outline" className={styles[tone as keyof typeof styles]}>{children}</Badge>
}

function Assistant({ messages, prompt, setPrompt, sendPrompt, close }: { messages: { from: string; text: string }[]; prompt: string; setPrompt: (value: string) => void; sendPrompt: (value?: string) => void; close: () => void }) {
  return <Card className="flex min-h-[500px] flex-col border-primary/15 bg-card shadow-[0_12px_40px_-24px_rgba(29,53,87,0.35)]"><CardHeader className="flex flex-row items-center justify-between border-b border-border/60 px-5 py-4"><div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Bot className="size-4" /></div><div><CardTitle className="text-sm">Elma AI Assistant</CardTitle><div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground"><span className="size-1.5 rounded-full bg-emerald-500" /> Online · Portfolio copilot</div></div></div><div className="flex items-center gap-1"><Button variant="ghost" size="icon" aria-label="More assistant options"><MoreHorizontal /></Button><Button variant="ghost" size="icon" onClick={close} aria-label="Close assistant"><X /></Button></div></CardHeader><CardContent className="flex flex-1 flex-col gap-4 p-4"><div className="flex flex-1 flex-col gap-3 overflow-auto"><div className="flex gap-2"><div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="size-3" /></div><div className="max-w-[87%] rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-xs leading-relaxed text-foreground">{messages[0].text}</div></div>{messages.slice(1).map((message, index) => <div key={`${message.text}-${index}`} className={`flex gap-2 ${message.from === 'user' ? 'justify-end' : ''}`}>{message.from === 'elma' && <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"><Sparkles className="size-3" /></div>}<div className={`max-w-[87%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${message.from === 'user' ? 'rounded-tr-sm bg-primary text-primary-foreground' : 'rounded-tl-sm bg-muted'}`}>{message.text}</div></div>)}</div><div><p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Try asking</p><div className="flex flex-wrap gap-2">{suggestions.map((item) => <button key={item} type="button" onClick={() => sendPrompt(item)} className="rounded-full border border-border bg-background px-2.5 py-1.5 text-[10px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">{item}</button>)}</div></div><div className="relative"><Textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing && event.keyCode !== 229) { event.preventDefault(); sendPrompt() } }} placeholder="Ask Elma anything..." className="min-h-[72px] resize-none rounded-xl border-border bg-muted/40 pr-12 text-xs shadow-none focus-visible:ring-primary/20" aria-label="Ask Elma a question"/><div className="absolute bottom-2.5 left-2.5 flex gap-1"><Button type="button" variant="ghost" size="icon" className="size-7" aria-label="Attach a file"><Paperclip /></Button></div><Button type="button" size="icon" className="absolute bottom-2.5 right-2.5 size-8 rounded-lg" onClick={() => sendPrompt()} aria-label="Send prompt"><Send /></Button></div><p className="text-center text-[10px] text-muted-foreground">Elma can make mistakes. Review important decisions.</p></CardContent></Card>
}

export default ElmaDashboard
