/* src/web/js/lib/Toggle.svelte generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	prevent_default,
	run_all,
	safe_not_equal,
	set_data,
	space,
	text,
	toggle_class
} from "svelte/internal";

import { createEventDispatcher } from "svelte";

function create_fragment(ctx) {
	let ul;
	let li0;
	let a0;
	let t0;
	let a0_href_value;
	let t1;
	let li1;
	let a1;
	let t2;
	let a1_href_value;
	let mounted;
	let dispose;

	return {
		c() {
			ul = element("ul");
			li0 = element("li");
			a0 = element("a");
			t0 = text(/*off*/ ctx[1]);
			t1 = space();
			li1 = element("li");
			a1 = element("a");
			t2 = text(/*on*/ ctx[2]);
			attr(a0, "href", a0_href_value = "#" + /*off*/ ctx[1]);
			attr(a0, "class", "a");
			toggle_class(a0, "-on", !/*value*/ ctx[0]);
			attr(li0, "class", "sp");
			attr(a1, "href", a1_href_value = "#" + /*on*/ ctx[2]);
			attr(a1, "class", "a");
			toggle_class(a1, "-on", /*value*/ ctx[0]);
			attr(li1, "class", "sp");
			attr(ul, "class", "lr ln flx");
		},
		m(target, anchor) {
			insert(target, ul, anchor);
			append(ul, li0);
			append(li0, a0);
			append(a0, t0);
			append(ul, t1);
			append(ul, li1);
			append(li1, a1);
			append(a1, t2);

			if (!mounted) {
				dispose = [
					listen(a0, "click", prevent_default(/*click_handler*/ ctx[4])),
					listen(a1, "click", prevent_default(/*click_handler_1*/ ctx[5]))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*off*/ 2) set_data(t0, /*off*/ ctx[1]);

			if (dirty & /*off*/ 2 && a0_href_value !== (a0_href_value = "#" + /*off*/ ctx[1])) {
				attr(a0, "href", a0_href_value);
			}

			if (dirty & /*value*/ 1) {
				toggle_class(a0, "-on", !/*value*/ ctx[0]);
			}

			if (dirty & /*on*/ 4) set_data(t2, /*on*/ ctx[2]);

			if (dirty & /*on*/ 4 && a1_href_value !== (a1_href_value = "#" + /*on*/ ctx[2])) {
				attr(a1, "href", a1_href_value);
			}

			if (dirty & /*value*/ 1) {
				toggle_class(a1, "-on", /*value*/ ctx[0]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(ul);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { value = false } = $$props;
	let { off = "Off" } = $$props;
	let { on = "On" } = $$props;
	const dispatch = createEventDispatcher();

	function set(v) {
		dispatch("change", v);
		$$invalidate(0, value = v);
	}

	const click_handler = () => set(false);
	const click_handler_1 = () => set(true);

	$$self.$$set = $$props => {
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
		if ("off" in $$props) $$invalidate(1, off = $$props.off);
		if ("on" in $$props) $$invalidate(2, on = $$props.on);
	};

	return [value, off, on, set, click_handler, click_handler_1];
}

class Toggle extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { value: 0, off: 1, on: 2 });
	}
}

export default Toggle;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2FsdmFyby9Xb3Jrc3BhY2UvanNvbi1zY2hlbWEtZmFrZXIvc3JjL3dlYi9qcy9saWIvVG9nZ2xlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXG4gIGV4cG9ydCBsZXQgdmFsdWUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBvZmYgPSAnT2ZmJztcbiAgZXhwb3J0IGxldCBvbiA9ICdPbic7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblxuICBmdW5jdGlvbiBzZXQodikge1xuICAgIGRpc3BhdGNoKCdjaGFuZ2UnLCB2KTtcbiAgICB2YWx1ZSA9IHY7XG4gIH1cbjwvc2NyaXB0PlxuXG48dWwgY2xhc3M9XCJsciBsbiBmbHhcIj5cbiAgPGxpIGNsYXNzPVwic3BcIj5cbiAgICA8YSBocmVmPVwiI3tvZmZ9XCIgY2xhc3M9XCJhXCIgY2xhc3M6LW9uPXshdmFsdWV9IG9uOmNsaWNrfHByZXZlbnREZWZhdWx0PXsoKSA9PiBzZXQoZmFsc2UpfT57b2ZmfTwvYT5cbiAgPC9saT5cbiAgPGxpIGNsYXNzPVwic3BcIj5cbiAgICA8YSBocmVmPVwiI3tvbn1cIiBjbGFzcz1cImFcIiBjbGFzczotb249e3ZhbHVlfSBvbjpjbGlja3xwcmV2ZW50RGVmYXVsdD17KCkgPT4gc2V0KHRydWUpfT57b259PC9hPlxuICA8L2xpPlxuPC91bD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FDVyxxQkFBcUIsUUFBUSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBZ0I4QyxHQUFHOzs7O29CQUdOLEdBQUU7a0RBSDlFLEdBQUc7O3NDQUF5QixHQUFLOztpREFHakMsR0FBRTs7cUNBQXdCLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FIZ0QsR0FBRzs7NkVBQWxGLEdBQUc7Ozs7O3VDQUF5QixHQUFLOzs7NkNBRzJDLEdBQUU7OzJFQUE5RSxHQUFFOzs7OztzQ0FBd0IsR0FBSzs7Ozs7Ozs7Ozs7Ozs7T0FqQmpDLEtBQUssR0FBRyxLQUFLO09BQ2IsR0FBRyxHQUFHLEtBQUs7T0FDWCxFQUFFLEdBQUcsSUFBSTtPQUVkLFFBQVEsR0FBRyxxQkFBcUI7O1VBRTdCLEdBQUcsQ0FBQyxDQUFDO0VBQ1osUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2tCQUNwQixLQUFLLEdBQUcsQ0FBQzs7OzZCQU1vRSxHQUFHLENBQUMsS0FBSzsrQkFHWCxHQUFHLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9