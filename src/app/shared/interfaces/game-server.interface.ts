export interface InfoResponse {
  protocol: number;
  name: string;
  map: string;
  folder: string;
  game: string;
  appId: number;
  players: number;
  maxPlayers: number;
  bots: number;
  serverType: string;
  environment: string;
  visibility: number;
  vac: number;
  version: string;
  port?: number;
  serverId?: BigInt;
  spectatorPort?: number;
  spectatorName?: string;
  keywords?: string;
  gameId?: BigInt;
}

export interface PlayerResponse {
  playerCount: number;
  players: Player[];
}

export interface Player {
  index: number;
  name: string;
  score: number;
  duration: number;
}

export interface RulesResponse {
  ruleCount: number;
  rules: Rule[];
}

export interface Rule {
  name: string;
  value: string;
}

export interface ServersInfo {
  retake1: InfoResponse,
  execute1: InfoResponse
}

export interface ServersPlayersInfo {
  retake1: PlayerResponse,
  execute1: PlayerResponse,
  totalPlayersCount: number
}

export const EmptyServersPlayersInfoResponse = {retake1: {playerCount: 0, players: []}, execute1: {playerCount: 0, players: []}, totalPlayersCount: 0}
