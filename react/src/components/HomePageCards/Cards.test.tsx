import React from "react";
import { render } from "@testing-library/react";
import { CreateCards } from "./Cards";
import { movies } from "../cinemadata";
import { it, describe, expect } from "vitest";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
