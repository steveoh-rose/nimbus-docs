import { CodeBlock } from "@/components/code-block"
import { ValidationDemoClient } from "@/components/content/validation-demo-client"

const SNIPPET = `import { useState } from 'react';
import { Button, Callout, TextInput } from '@console/nimbus-ui/core';

export function ConnectionForm() {
  const [vlan, setVlan] = useState('');
  const [error, setError] = useState<string>();
  const [attempted, setAttempted] = useState(false); // revision mode

  const validate = (value: string) => {
    const n = Number(value);
    return n >= 1 && n <= 4094 ? undefined : 'VLAN ID must be between 1 and 4094.';
  };

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setAttempted(true);
        setError(validate(vlan)); // validate every field on submit
      }}
    >
      {error && (
        <Callout intent="danger">
          <Callout.Content>
            <Callout.Title>Fix the highlighted fields</Callout.Title>
          </Callout.Content>
        </Callout>
      )}

      <TextInput
        label="VLAN ID"
        value={vlan}
        invalid={!!error}
        hint={error ?? 'Strict boundary, so validate as the user types.'}
        // strict boundary: validate on keypress. Otherwise wait for revision mode.
        onChange={(v: string) => {
          setVlan(v);
          if (v) setError(validate(v));
        }}
        onBlur={() => attempted && setError(validate(vlan))}
      />

      {/* never disabled, so the user always has a way forward */}
      <Button type="submit">Submit</Button>
    </form>
  );
}`

export function ValidationDemo() {
  return (
    <ValidationDemoClient
      codeSlot={<CodeBlock code={SNIPPET} lang="tsx" className="my-0" />}
    />
  )
}
