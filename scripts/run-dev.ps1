param(
  [switch]$SkipInstall
)

$ErrorActionPreference = "Stop"

function Has-Command($name) {
  try { Get-Command $name -ErrorAction Stop | Out-Null; return $true } catch { return $false }
}

if (-not $SkipInstall) {
  if (Has-Command pnpm) {
    pnpm install
  } elseif (Has-Command npm) {
    npm install
  } else {
    Write-Error "Neither pnpm nor npm found in PATH. Install one of them and re-run."
    exit 1
  }
}

if (Has-Command pnpm) {
  pnpm run dev
} elseif (Has-Command npm) {
  npm run dev
} else {
  Write-Error "Neither pnpm nor npm found in PATH. Install one of them and re-run."
  exit 1
}
