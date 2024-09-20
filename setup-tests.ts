import { afterEach, beforeAll, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { faker } from "@faker-js/faker";

expect.extend(matchers);

beforeAll(() => {
  faker.seed(1);
});

afterEach(() => {
  cleanup();
});
