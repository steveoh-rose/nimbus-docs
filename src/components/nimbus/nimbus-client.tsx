"use client"

/**
 * Client re-exports so MDX pages (server-rendered) can embed live Nimbus components.
 * Nimbus core components use hooks and have no "use client" directive of their own.
 */
export * from "@nimbus/core"
