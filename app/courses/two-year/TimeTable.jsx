import React from "react";



const table=[
    {"":"",}
]

export default function TimeTable() {
  return (
    <table  className="min-w-full bg-white border">
      <thead  className="bg-red-800 text-white">
        <tr>
          <th  className="w-1/3 text-right py-3 px-4 uppercase font-semibold text-sm">
            Class Schedule
          </th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm"></th>
        </tr>
      </thead>
      <tbody  className="text-gray-700">
        <tr>
          <td  className="w-1/3 text-left py-3 px-4">
            Regular Batches
            <p  className="text-sm">(JEE Main &amp; Advancec)/NEEVAIIMS </p>
          </td>
          <td  className="w-1/3 text-left py-3 px-4">
            Classes will be conducted 6 days a week for 3 Hrs. daily.
          </td>
        </tr>
        <tr>
          <td  className="w-1/3 text-left py-3 px-4">
            Weekend Batches<p  className="text-sm">(JEE Mains)/NEET </p>
          </td>
          <td  className="w-1/3 text-left py-3 px-4">
            Classes will be conducted twice on Saturday and Sunday for 4.5 hours
            daily.
          </td>
        </tr>
      </tbody>
    </table>
  );
}
