import unittest


# from isGreater import isGreater

def isGreater(a , b):
	return a > b 

class TestIsOdd(unittest.TestCase):

    def test_upper(self):
        self.assertEqual(isGreater(10, 20),False)
        self.assertEqual(isGreater(5, 1),True)

        self.assertEqual(isGreater(3, 34),False)


if __name__ == '__main__':
    unittest.main()