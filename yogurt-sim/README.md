# Creating WASM
```bash
cargo build --release --target wasm32-unknown-unknown
wasm-bindgen --no-typescript --target web \
    --out-dir ../public/game/ \
    --out-name "yogurt-sim" \
    ./target/wasm32-unknown-unknown/release/yogurt-sim.wasm
```

