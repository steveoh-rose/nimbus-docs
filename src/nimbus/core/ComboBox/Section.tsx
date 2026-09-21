// @ts-nocheck
import React from 'react';
import { SectionProps, Section as ReactStatelySection } from 'react-stately';

/**
 * Wrapper for Section from react-stately.
 * This wrapper ensures a stable API and gives us greater control than exposing the components directly.
 */

/**
 * ComboBox Section
 * Used to specify sections/groups of options within a ComboBox
 */
export function Section<T>(props: Readonly<SectionProps<T>>) {
  return <ReactStatelySection {...props} />;
}

// Copy static methods
Object.assign(Section, ReactStatelySection);

Section.displayName = 'ComboBox.Section';
