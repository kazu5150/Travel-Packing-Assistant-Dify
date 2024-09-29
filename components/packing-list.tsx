export function PackingList({ items }: { items: string[] }) {
  // 2つのアイテムごとにグループ化するためのヘルパー関数
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 2) {
    groupedItems.push(items.slice(i, i + 2));
  }

  return (
    <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">
            Select
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">
            Item
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">
            Quantity
          </th>
          <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">
            Select
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-300">
            Item
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Quantity
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-300">
        {groupedItems.map((group, index) => (
          <tr key={index}>
            <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
              <input type="checkbox" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">{group[0]?.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-r border-gray-300">{group[0]?.quantity}</td>
            <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-300">
              {group[1] ? <input type="checkbox" /> : ""}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">{group[1]?.name || ""}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group[1]?.quantity || ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


