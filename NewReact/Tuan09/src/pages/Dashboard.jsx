import { useState } from 'react';
import { LayoutGrid, FolderOpen, Users, PieChart, MessageSquare, Code2, Search, Bell, HelpCircle, TrendingUp, ShoppingCart, DollarSign, UserPlus, FileDown, FileUp, Pencil, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { name: 'Dashboard', icon: LayoutGrid },
  { name: 'Projects', icon: FolderOpen },
  { name: 'Teams', icon: Users },
  { name: 'Analytics', icon: PieChart },
  { name: 'Messages', icon: MessageSquare },
  { name: 'Integrations', icon: Code2 },
];

const stats = [
  { label: 'Turnover', value: '$92,405', change: '+5.39%', icon: ShoppingCart, iconBg: 'bg-pink-100', iconColor: 'text-pink-500' },
  { label: 'Profit', value: '$32,218', change: '+5.39%', icon: DollarSign, iconBg: 'bg-blue-100', iconColor: 'text-blue-500' },
  { label: 'New Customers', value: '298', change: '+6.84%', icon: UserPlus, iconBg: 'bg-blue-100', iconColor: 'text-blue-500' },
];

const orders = [
  { id: 1, customer: 'Marcus Philips', company: 'Acme Inc.', value: '$250.00', date: 'Jan 30, 2024', status: 'New', avatar: '/images/visily-avatar-42.png' },
  { id: 2, customer: 'Sophie Turner', company: 'BrightCo', value: '$890.00', date: 'Feb 12, 2024', status: 'In-progress', avatar: '/images/visily-avatar-42.png' },
];

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('Dashboard');

  return (
    <div className="flex min-h-[calc(100vh-80px)] bg-gray-50">
      <aside className="w-20 lg:w-64 bg-white border-r border-gray-100 flex flex-col py-8 px-3 lg:px-5 shrink-0">
        <nav className="flex-1 space-y-2 mt-4">
          {navItems.map(item => (
            <button
              key={item.name}
              onClick={() => setActiveNav(item.name)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-2xl font-semibold text-sm transition-all ${activeNav === item.name
                ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="hidden lg:block">{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100">
          <h1 className="text-2xl font-extrabold text-pink-500">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
            </button>
            <img src="/images/visily-avatar-42.png" alt="User" className="w-9 h-9 rounded-full border-2 border-pink-100 object-cover" />
          </div>
        </div>

        <div className="flex-1 p-8 space-y-8 overflow-auto">
          <section>
            <h2 className="flex items-center gap-2 text-base font-extrabold text-gray-800 mb-5">Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {stats.map(stat => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-5">
                  <div className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">{stat.label}</p>
                    <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-extrabold text-gray-800">Detailed report</h2>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border-2 border-pink-400 text-pink-500 rounded-xl text-sm font-bold hover:bg-pink-50 transition-colors">
                  <FileDown className="w-4 h-4" /> Export
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/60 text-left">
                    <th className="px-5 py-4">Customer</th>
                    <th className="px-5 py-4">Value</th>
                    <th className="px-5 py-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id} className="border-b border-gray-50 hover:bg-pink-50/30 transition-colors">
                      <td className="px-5 py-4 flex items-center gap-3">
                        <img src={order.avatar} alt="" className="w-8 h-8 rounded-full" />
                        <span className="font-semibold">{order.customer}</span>
                      </td>
                      <td className="px-5 py-4 font-bold">{order.value}</td>
                      <td className="px-5 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600">{order.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
