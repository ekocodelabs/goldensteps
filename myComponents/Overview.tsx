"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Men", value: 12 },
  { name: "Women", value: 13 },
];

const COLORS = ["#FFD700", "#8884d8"];

export default function Overview() {
  const total = 25;

  return (
    <div className="space-y-10">
      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <Card className="bg-neutral-900 border-yellow-500/20 text-yellow-300">
          <CardHeader>
            <CardTitle>Total Shoes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-yellow-400">{total}</p>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-yellow-500/20 text-yellow-300">
          <CardHeader>
            <CardTitle>Men</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-yellow-400">12</p>
          </CardContent>
        </Card>

        <Card className="bg-neutral-900 border-yellow-500/20 text-yellow-300">
          <CardHeader>
            <CardTitle>Women</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-yellow-400">13</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card className="bg-neutral-900 border-yellow-500/20 text-yellow-300">
        <CardHeader>
          <CardTitle>Shoe Distribution</CardTitle>
        </CardHeader>

        <CardContent className="h-75">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
