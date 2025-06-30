
class ScrollPositionManager {
  private positions: Map<string, number> = new Map();

  savePosition(path: string, position: number) {
    this.positions.set(path, position);
  }

  getPosition(path: string): number {
    return this.positions.get(path) || 0;
  }

  clearPosition(path: string) {
    this.positions.delete(path);
  }

  clearAll() {
    this.positions.clear();
  }
}

export const scrollManager = new ScrollPositionManager();
