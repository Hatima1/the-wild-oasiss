import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function capinOparetions() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "all" },
          { value: "discount", label: "discount" },
          { value: "nodiscount", label: "nodiscount" },
        ]}
      />
    </TableOperations>
  );
}

export default capinOparetions;
