import * as fs from "fs";
import TOML from "@iarna/toml";
import type { RawConfig } from "../../config";
import path from "path";

/** Write a mock wrangler.toml file to disk. */
export function writeWranglerToml(config: RawConfig = {}, prefix = ".") {
	fs.writeFileSync(
		path.join(prefix, "wrangler.toml"),
		TOML.stringify({
			compatibility_date: "2022-01-12",
			name: "test-name",
			...(config as TOML.JsonMap),
		}),
		"utf-8"
	);
}

/** Write a mock wrangler.json file to disk. */
export function writeWranglerJson(config: RawConfig = {}, prefix = ".") {
	fs.writeFileSync(
		path.join(prefix, "wrangler.json"),
		JSON.stringify({
			compatibility_date: "2022-01-12",
			name: "test-name",
			...config,
		}),
		"utf-8"
	);
}
