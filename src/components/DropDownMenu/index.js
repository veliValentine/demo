const DropDownMenu = ({
  values = [],
  title = "",
  defaultOptionText = "",
  onChange
}) => {
  const dropdownItems = values.map((value) => (
    <option key={value} value={value}>{value}</option>
  ))
  return (
    <select
      name={title}
      onChange={onChange}
    >
      <option value="">{defaultOptionText}</option>
      {dropdownItems}
    </select>
  )
}

export default DropDownMenu
