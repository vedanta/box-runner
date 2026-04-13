.PHONY: open docs docs-build clean-log help

help:
	@echo "Box Runner — tutorial commands"
	@echo ""
	@echo "  make open        Open index.html in your default browser"
	@echo "  make docs        Start the VitePress docs dev server"
	@echo "  make docs-build  Build the static docs site"
	@echo "  make log         Show the git history so far"

# Open the webpage in the default browser (macOS)
open:
	@if [ -f index.html ]; then \
		command -v open >/dev/null 2>&1 && open index.html || \
		command -v xdg-open >/dev/null 2>&1 && xdg-open index.html || \
		echo "Open index.html manually in your browser."; \
	else \
		echo "index.html does not exist yet. Check out a later stage with: git checkout stage-1-first-commit"; \
	fi

# Show a compact git history
log:
	@git log --oneline --decorate --graph --all

# Start the tutorial docs dev server
docs:
	cd docs-site && npm run docs:dev

# Build the tutorial docs site for production
docs-build:
	cd docs-site && npm run docs:build
