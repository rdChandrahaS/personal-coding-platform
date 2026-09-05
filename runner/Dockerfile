FROM python:3.12-slim

# Install uv directly from Astral's official image
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Install JDK 21, GCC, and G++ 
RUN apt-get update \
    && apt-get install -y --no-install-recommends openjdk-21-jdk gcc g++ \
    && rm -rf /var/lib/apt/lists/*

RUN useradd -m -u 10001 runner
WORKDIR /workspace
USER runner
CMD ["sleep", "infinity"]
