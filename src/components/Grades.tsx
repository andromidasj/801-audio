import { gradesData } from "~/gradesData";
import PortfolioSection from "./PortfolioSection";

export default function Grades() {
  return (
    <PortfolioSection title="grades">
      <table className="table-auto text-xl md:m-8">
        <thead>
          <tr className="border-b-2 border-green-400/80 text-left uppercase">
            <th className="p-4">Course</th>
            <th className="p-4">Title</th>
            <th className="p-4">Grade</th>
          </tr>
        </thead>
        <tbody>
          {gradesData.map((e) => (
            <tr
              key={e.course}
              className="border-b-2 border-green-300/20 last:border-0"
            >
              <td className="p-4">{e.course}</td>
              <td className="p-4">{e.title}</td>
              <td className="p-4">{e.grade}</td>
            </tr>
          ))}
          <tr>
            <td className="p-4"></td>
            <td className="p-4 text-center">• • •</td>
            <td className="p-4"></td>
          </tr>
          <tr>
            <td className="p-4">{"DGM 2440"}</td>
            <td className="p-4">{"Location Sound Proficiency"}</td>
            <td className="p-4">{"70/80 (88%)"}</td>
          </tr>
        </tbody>
      </table>
    </PortfolioSection>
  );
}
