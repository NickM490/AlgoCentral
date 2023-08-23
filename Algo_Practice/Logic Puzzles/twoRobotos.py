class Robot:
    def __init__(self,numIn,posIn):
        self.num = numIn
        self.pos = posIn
        self.para = False
    def moveLeft(self):
        self.pos-=1
        return self
    def moveRight(self):
        self.pos+=1
        return self
    def doNothing(self):
        return self
    def checkPara(self,chutes):
        if self.pos in chutes:
            self.para=True
        return self

def main():
    robots = [Robot(0,-10),Robot(1,10)]
    chutes = [-10,10]
    while robots[0].pos != robots[1].pos:
        for robot in robots:
            if not robot.para:
                robot.moveRight()
                robot.doNothing()
                robot.checkPara(chutes)
            else:
                robot.moveRight()
                robot.moveRight()
                robot.moveRight()
            print(f"Robot {robot.num} pos: x={robot.pos}")
    print(f'Robots have found each other at x={robots[0].pos}')
main()