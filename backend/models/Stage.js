const db = require('../config/db');

class Stage {
  static async createStage(name) {
    const [result] = await db.execute('INSERT INTO stages (name) VALUES (?)', [name]);
    return result.insertId;
  }

  static async getStages() {
    const [rows] = await db.execute('SELECT * FROM stages');
    return rows;
  }

  static async updateStage(id, name) {
    await db.execute('UPDATE stages SET name = ? WHERE id = ?', [name, id]);
  }

  static async deleteStage(id) {
    await db.execute('DELETE FROM stages WHERE id = ?', [id]);
  }

  static async createStatus(stageId, name) {
    const [result] = await db.execute('INSERT INTO statuses (stage_id, name) VALUES (?, ?)', [stageId, name]);
    return result.insertId;
  }

  static async getStatuses(stageId) {
    const [rows] = await db.execute('SELECT * FROM statuses WHERE stage_id = ?', [stageId]);
    return rows;
  }

  static async updateStatus(id, name) {
    await db.execute('UPDATE statuses SET name = ? WHERE id = ?', [name, id]);
  }

  static async deleteStatus(id) {
    await db.execute('DELETE FROM statuses WHERE id = ?', [id]);
  }
}

module.exports = Stage;