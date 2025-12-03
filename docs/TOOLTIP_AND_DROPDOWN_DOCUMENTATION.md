# Tooltip & Dropdown Menu Documentation

This document covers the **CustomTooltip** and **ActionMenu** components - reusable UI elements for displaying contextual information and action menus.

---

## Table of Contents

- [CustomTooltip](#customtooltip)
  - [Basic Usage](#basic-usage)
  - [Variants](#variants)
  - [Sizes](#sizes)
  - [Positioning](#positioning)
  - [Helper Components](#helper-components)
  - [Props Reference](#props-reference)
- [ActionMenu](#actionmenu)
  - [Basic Usage](#actionmenu-basic-usage)
  - [Grouped Actions](#grouped-actions)
  - [Checkbox & Radio Menus](#checkbox--radio-menus)
  - [Submenus](#submenus)
  - [Trigger Variants](#trigger-variants)
  - [Props Reference](#actionmenu-props-reference)

---

## CustomTooltip

A variant-based tooltip component built on shadcn/ui tooltip with additional customization options.

### Basic Usage

```tsx
import { CustomTooltip } from "@/components/CustomTooltip";

function Example() {
  return (
    <CustomTooltip content="This is a helpful tip">
      <button>Hover me</button>
    </CustomTooltip>
  );
}
```

### Variants

Four built-in variants with appropriate styling:

```tsx
import {
  CustomTooltip,
  InfoTooltip,
  SuccessTooltip,
  WarningTooltip,
  ErrorTooltip,
} from "@/components/CustomTooltip";

// Using variant prop
<CustomTooltip content="Information message" variant="info">
  <span>Info</span>
</CustomTooltip>

<CustomTooltip content="Success message" variant="success">
  <span>Success</span>
</CustomTooltip>

<CustomTooltip content="Warning message" variant="warning">
  <span>Warning</span>
</CustomTooltip>

<CustomTooltip content="Error message" variant="error">
  <span>Error</span>
</CustomTooltip>

// Or use helper components
<InfoTooltip content="This is informational">
  <button>Info</button>
</InfoTooltip>

<SuccessTooltip content="Operation succeeded!">
  <button>Success</button>
</SuccessTooltip>

<WarningTooltip content="Proceed with caution">
  <button>Warning</button>
</WarningTooltip>

<ErrorTooltip content="Something went wrong">
  <button>Error</button>
</ErrorTooltip>
```

### Sizes

Three size options: `sm`, `md` (default), and `lg`:

```tsx
<CustomTooltip content="Small tooltip" size="sm">
  <span>Small</span>
</CustomTooltip>

<CustomTooltip content="Medium tooltip (default)" size="md">
  <span>Medium</span>
</CustomTooltip>

<CustomTooltip content="Large tooltip with more padding" size="lg">
  <span>Large</span>
</CustomTooltip>
```

### Positioning

Control tooltip placement with `side` and `align` props:

```tsx
// Side: top, bottom, left, right
<CustomTooltip content="Above the element" side="top">
  <span>Top</span>
</CustomTooltip>

<CustomTooltip content="Below the element" side="bottom">
  <span>Bottom</span>
</CustomTooltip>

<CustomTooltip content="Left of the element" side="left">
  <span>Left</span>
</CustomTooltip>

<CustomTooltip content="Right of the element" side="right">
  <span>Right</span>
</CustomTooltip>

// Alignment: start, center, end
<CustomTooltip content="Aligned to start" side="top" align="start">
  <span>Start aligned</span>
</CustomTooltip>

<CustomTooltip content="Centered (default)" side="top" align="center">
  <span>Center aligned</span>
</CustomTooltip>

<CustomTooltip content="Aligned to end" side="top" align="end">
  <span>End aligned</span>
</CustomTooltip>
```

### Custom Delay

Control how quickly the tooltip appears:

```tsx
// Quick tooltip (100ms delay)
<CustomTooltip content="Fast!" delayDuration={100}>
  <span>Quick</span>
</CustomTooltip>

// Slow tooltip (1000ms delay)
<CustomTooltip content="Took a while..." delayDuration={1000}>
  <span>Slow</span>
</CustomTooltip>
```

### Helper Components

Pre-configured variant components for convenience:

```tsx
import {
  InfoTooltip,
  SuccessTooltip,
  WarningTooltip,
  ErrorTooltip,
} from "@/components/CustomTooltip";

// These are shortcuts for CustomTooltip with variant prop
<InfoTooltip content="Info variant pre-applied">
  <span>ℹ️</span>
</InfoTooltip>;
```

### Props Reference

| Prop            | Type                                          | Default     | Description               |
| --------------- | --------------------------------------------- | ----------- | ------------------------- |
| `content`       | `ReactNode`                                   | required    | Tooltip content           |
| `children`      | `ReactNode`                                   | required    | Trigger element           |
| `variant`       | `"info" \| "success" \| "warning" \| "error"` | `undefined` | Visual variant            |
| `size`          | `"sm" \| "md" \| "lg"`                        | `"md"`      | Tooltip size              |
| `side`          | `"top" \| "bottom" \| "left" \| "right"`      | `"top"`     | Placement side            |
| `align`         | `"start" \| "center" \| "end"`                | `"center"`  | Alignment                 |
| `delayDuration` | `number`                                      | `200`       | Delay before showing (ms) |
| `className`     | `string`                                      | `undefined` | Additional CSS classes    |

---

## ActionMenu

A customizable dropdown menu component for displaying actions, with support for groups, checkboxes, radios, and submenus.

### ActionMenu Basic Usage

```tsx
import { ActionMenu, ActionMenuAction } from "@/components/ActionMenu";

function Example() {
  const actions: ActionMenuAction[] = [
    {
      label: "Edit",
      onClick: () => console.log("Edit clicked"),
    },
    {
      label: "Duplicate",
      onClick: () => console.log("Duplicate clicked"),
    },
    {
      label: "Delete",
      onClick: () => console.log("Delete clicked"),
      variant: "destructive",
    },
  ];

  return <ActionMenu actions={actions} />;
}
```

### Grouped Actions

Organize actions into logical groups:

```tsx
import { ActionMenu, ActionMenuGroup } from "@/components/ActionMenu";

function Example() {
  const groups: ActionMenuGroup[] = [
    {
      label: "Edit",
      items: [
        { label: "Undo", shortcut: "⌘Z", onClick: () => {} },
        { label: "Redo", shortcut: "⌘Y", onClick: () => {} },
      ],
    },
    {
      label: "Clipboard",
      items: [
        { label: "Cut", shortcut: "⌘X", onClick: () => {} },
        { label: "Copy", shortcut: "⌘C", onClick: () => {} },
        { label: "Paste", shortcut: "⌘V", onClick: () => {} },
      ],
    },
    {
      // Group without label
      items: [{ label: "Delete", variant: "destructive", onClick: () => {} }],
    },
  ];

  return <ActionMenu groups={groups} />;
}
```

### Checkbox & Radio Menus

Create selection menus with checkboxes or radio buttons:

```tsx
import {
  ActionMenu,
  ActionMenuCheckbox,
  ActionMenuRadio,
} from "@/components/ActionMenu";

function Example() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showPanel, setShowPanel] = useState(false);
  const [fontSize, setFontSize] = useState("medium");

  const checkboxItems: ActionMenuCheckbox[] = [
    {
      label: "Show Status Bar",
      checked: showStatusBar,
      onCheckedChange: setShowStatusBar,
    },
    {
      label: "Show Panel",
      checked: showPanel,
      onCheckedChange: setShowPanel,
    },
  ];

  const radioItems: ActionMenuRadio = {
    value: fontSize,
    onValueChange: setFontSize,
    items: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ],
  };

  return (
    <ActionMenu
      trigger={<button>Settings</button>}
      checkboxItems={checkboxItems}
      radioItems={radioItems}
    />
  );
}
```

### Submenus

Create nested dropdown menus:

```tsx
import { ActionMenu, ActionMenuSubmenu } from "@/components/ActionMenu";

function Example() {
  const submenus: ActionMenuSubmenu[] = [
    {
      label: "Share",
      items: [
        { label: "Email", onClick: () => {} },
        { label: "Message", onClick: () => {} },
        { label: "Copy Link", onClick: () => {} },
      ],
    },
    {
      label: "Export As",
      items: [
        { label: "PDF", onClick: () => {} },
        { label: "PNG", onClick: () => {} },
        { label: "SVG", onClick: () => {} },
      ],
    },
  ];

  return (
    <ActionMenu
      actions={[{ label: "Download", onClick: () => {} }]}
      submenus={submenus}
    />
  );
}
```

### Trigger Variants

Built-in trigger styles:

```tsx
// Default: Three dots horizontal
<ActionMenu actions={actions} />

// Vertical dots
<ActionMenu actions={actions} triggerVariant="dots-vertical" />

// Custom trigger
<ActionMenu
  actions={actions}
  trigger={<button className="px-4 py-2 bg-blue-500 text-white rounded">Actions</button>}
/>

// With align option
<ActionMenu actions={actions} align="end" />
```

### Disabled Items

Disable specific menu items:

```tsx
const actions: ActionMenuAction[] = [
  { label: "Edit", onClick: () => {} },
  { label: "Archive", onClick: () => {}, disabled: true },
  { label: "Delete", onClick: () => {}, variant: "destructive" },
];
```

### Keyboard Shortcuts

Display keyboard shortcut hints:

```tsx
const actions: ActionMenuAction[] = [
  { label: "New File", shortcut: "⌘N", onClick: () => {} },
  { label: "Open", shortcut: "⌘O", onClick: () => {} },
  { label: "Save", shortcut: "⌘S", onClick: () => {} },
  { label: "Save As...", shortcut: "⇧⌘S", onClick: () => {} },
];
```

### ActionMenu Props Reference

#### ActionMenu Props

| Prop             | Type                                   | Default             | Description            |
| ---------------- | -------------------------------------- | ------------------- | ---------------------- |
| `actions`        | `ActionMenuAction[]`                   | `undefined`         | Simple action items    |
| `groups`         | `ActionMenuGroup[]`                    | `undefined`         | Grouped action items   |
| `checkboxItems`  | `ActionMenuCheckbox[]`                 | `undefined`         | Checkbox items         |
| `radioItems`     | `ActionMenuRadio`                      | `undefined`         | Radio button group     |
| `submenus`       | `ActionMenuSubmenu[]`                  | `undefined`         | Nested submenus        |
| `trigger`        | `ReactNode`                            | Dots icon           | Custom trigger element |
| `triggerVariant` | `"dots-horizontal" \| "dots-vertical"` | `"dots-horizontal"` | Built-in trigger style |
| `align`          | `"start" \| "center" \| "end"`         | `"end"`             | Dropdown alignment     |
| `className`      | `string`                               | `undefined`         | Additional CSS classes |

#### ActionMenuAction

| Prop       | Type                         | Description                        |
| ---------- | ---------------------------- | ---------------------------------- |
| `label`    | `string`                     | Display text                       |
| `onClick`  | `() => void`                 | Click handler                      |
| `shortcut` | `string`                     | Optional keyboard shortcut display |
| `disabled` | `boolean`                    | Disable the item                   |
| `variant`  | `"default" \| "destructive"` | Visual variant                     |
| `icon`     | `ReactNode`                  | Optional icon                      |

#### ActionMenuGroup

| Prop    | Type                 | Description          |
| ------- | -------------------- | -------------------- |
| `label` | `string`             | Optional group label |
| `items` | `ActionMenuAction[]` | Actions in the group |

#### ActionMenuCheckbox

| Prop              | Type                         | Description      |
| ----------------- | ---------------------------- | ---------------- |
| `label`           | `string`                     | Display text     |
| `checked`         | `boolean`                    | Checked state    |
| `onCheckedChange` | `(checked: boolean) => void` | Change handler   |
| `disabled`        | `boolean`                    | Disable the item |

#### ActionMenuRadio

| Prop            | Type                                                     | Description            |
| --------------- | -------------------------------------------------------- | ---------------------- |
| `value`         | `string`                                                 | Current selected value |
| `onValueChange` | `(value: string) => void`                                | Change handler         |
| `items`         | `{ value: string; label: string; disabled?: boolean }[]` | Radio options          |

#### ActionMenuSubmenu

| Prop    | Type                 | Description          |
| ------- | -------------------- | -------------------- |
| `label` | `string`             | Submenu trigger text |
| `items` | `ActionMenuAction[]` | Submenu actions      |

---

## Examples

### DataTable with Actions

```tsx
import { DataTable } from "@/components/DataTable";
import { ActionMenu } from "@/components/ActionMenu";

const columns = [
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email", sortable: true },
  { key: "status", header: "Status" },
];

<DataTable
  columns={columns}
  data={users}
  actions={(row) => (
    <ActionMenu
      actions={[
        { label: "Edit", onClick: () => editUser(row) },
        { label: "View Profile", onClick: () => viewProfile(row) },
        {
          label: "Delete",
          variant: "destructive",
          onClick: () => deleteUser(row),
        },
      ]}
    />
  )}
/>;
```

### Form Field with Tooltip

```tsx
import { CustomTooltip } from "@/components/CustomTooltip";
import { RHFUniversalInput } from "@/components/form";
import { Info } from "lucide-react";

<div className="flex items-center gap-2">
  <label>API Key</label>
  <CustomTooltip
    content="Your API key can be found in Settings > Developer > API Keys"
    variant="info"
  >
    <Info className="w-4 h-4 text-gray-400 cursor-help" />
  </CustomTooltip>
</div>
<RHFUniversalInput control={control} name="apiKey" type="password" />
```

---

## Best Practices

### Tooltips

1. **Keep content brief** - Tooltips should provide quick context, not lengthy explanations
2. **Use appropriate variants** - Match the variant to the type of information
3. **Don't overuse** - Only add tooltips where they provide value
4. **Consider mobile** - Tooltips require hover, so ensure mobile alternatives exist

### Dropdown Menus

1. **Group related actions** - Use groups to organize logically related items
2. **Limit depth** - Avoid deeply nested submenus
3. **Highlight destructive actions** - Use `variant: "destructive"` for dangerous operations
4. **Add shortcuts** - Display keyboard shortcuts for power users
5. **Disable wisely** - Show disabled items to indicate unavailable actions, but consider hiding irrelevant ones

---

## Live Examples

Visit these routes to see the components in action:

- **Tooltips**: [/example/toast](http://localhost:3000/example/toast) (includes tooltip examples)
- **Dropdown Menus**: [/example/dropdown](http://localhost:3000/example/dropdown)
- **DataTable with Actions**: [/example/data-table](http://localhost:3000/example/data-table)
