/**
 * Minimal type stand-ins for @storybook/react so vendored Nimbus stories
 * type-check and run without Storybook installed.
 */
import type { ReactNode } from "react"

export type ArgTypes = Record<string, any>

export type Decorator = (Story: () => ReactNode, context: any) => ReactNode

export interface Meta<_T = any> {
  title?: string
  component?: any
  subcomponents?: Record<string, any>
  parameters?: Record<string, any>
  args?: Record<string, any>
  argTypes?: ArgTypes
  decorators?: Decorator[]
  tags?: string[]
  render?: (args: any, context?: any) => ReactNode
}

export interface StoryObj<_T = any> {
  name?: string
  render?: (args: any, context?: any) => ReactNode
  args?: Record<string, any>
  argTypes?: ArgTypes
  parameters?: Record<string, any>
  decorators?: Decorator[]
  tags?: string[]
  play?: (context: any) => any
}

export type Preview = Record<string, any>
